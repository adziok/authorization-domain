import { AccessRepository } from "./AccessRepository";
import { Identity } from './Identity';

export class AccessService {
    constructor(private accessRepository: AccessRepository) { }

    async hasAccess(identity: Identity, externalId: string, resourceName: string, action: string): Promise<boolean> {
        const access = await this.accessRepository.getAccessByIdentityIdAndExternalId(identity.id, externalId);
        if (!access) {
            throw new Error('Invalid external id or missing permissions')
        }
        return access.hasAccess(`${resourceName}:${action}`);
    }
}
