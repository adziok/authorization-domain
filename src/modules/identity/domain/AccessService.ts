import { AccessRepository } from "./AccessRepository";
import { Identity } from './Identity';


export class AccessService {
    constructor(private accessRepository: AccessRepository) { }

    async hasAccess(identity: Identity, externalId: string, resourceName: string, action: string): Promise<boolean> {
        const access = await this.accessRepository.getAccessByIdentityIdAndExternalId(identity.id, externalId);
        return access.hasAccess(`${resourceName}:${action}`);
    }
}
