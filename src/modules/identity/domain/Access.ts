import { Identity } from "./Identity";

type ResourceName = string;

type PermissionTypes = 'create' | 'delete' | 'modify' | 'view';

type Permission = string;

type AccessTypes = 'ReadOnly' | 'Full' | 'Modify';

interface AccessProps {
    id: string;
    identity: Identity;
    resourceIdentifier: string;
    permissions: Set<Permission>;
}

export class Access {
    private props: AccessProps;
    private grantActions: Record<AccessTypes, (resourceName: ResourceName) => string[]> = {
        Full: this.grantFull,
        Modify: this.grantModify,
        ReadOnly: this.grantReadOnly
    };

    cloneAccessPermissions(accessToClone: Access) {
        if (!accessToClone.props.permissions) {
            throw new Error('Missing permissions to clone');
        }
        this.props.permissions = new Set(JSON.parse(JSON.stringify([...accessToClone.props.permissions])));
    }

    grantAccess(resourceName: ResourceName, type: AccessTypes) {
        const grantedPermission = this.grantActions[type]?.(resourceName);
        if (!grantedPermission) {
            throw new Error('Invalid access type');
        }
        this.props.permissions = new Set([...this.props.permissions, ...grantedPermission]);
    }

    revokeAccess(resourceName: ResourceName) {
        this.props.permissions = new Set(this.filterPermissionByResourceName(resourceName, [...this.props.permissions]));
    }

    hasAccess(permission: Permission): boolean {
        return this.props.permissions.has(permission);
    }

    private filterPermissionByResourceName(resourceName: string, permissions: string[]): string[] {
        return permissions.filter(permission => {
            const accessTypeStartAt = permission.lastIndexOf(':');
            const permissionResourceName = permission.substring(0, accessTypeStartAt);
            return permissionResourceName !== resourceName;
        });
    }

    private grantFull(resourceName: ResourceName): Permission[] {
        return [
            `${resourceName}:view`,
            `${resourceName}:create`,
            `${resourceName}:modify`,
            `${resourceName}:delete`,
        ];
    }

    private grantModify(resourceName: ResourceName): Permission[] {
        return [
            `${resourceName}:view`,
            `${resourceName}:create`,
            `${resourceName}:modify`,
        ];
    }

    private grantReadOnly(resourceName: ResourceName): Permission[] {
        return [
            `${resourceName}:view`,
        ];
    }
}
