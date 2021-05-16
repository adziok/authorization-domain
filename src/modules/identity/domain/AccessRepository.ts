import { Access } from './Access';

/**
 * Uytkownik ma listę permissi
 * Defaultowo jej brak jakiejkolwiek oznacza brak dostępu
 * Np: task:create task:remove
 */
export interface AccessRepository {
    getAccessesByIdentityId(identityId: string): Promise<Access[]>;
    getAccessByIdentityIdAndExternalId(identityId: string, externalId: string): Promise<Access>;
    save(access: Access): Promise<void>
}
