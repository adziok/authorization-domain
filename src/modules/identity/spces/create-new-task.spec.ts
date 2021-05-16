import { DisplayedName } from "../domain/DisplayedName"
import { Identity } from "../domain/Identity"
import { IdentityType } from "../domain/IdentityType"
import { AccessRepository } from '../domain/AccessRepository';
import { Access } from '../domain/Access';
import { AccessService } from '../domain/AccessService';

describe('Create new task', () => {
    describe('User have account and is part of project', () => {
        const identity: Identity = Object.assign(Identity.prototype, {
            props: {
                id: 'id',
                displayedName: Object.assign(DisplayedName, { value: 'user' }),
                image: null,
                type: Object.assign(IdentityType, { value: 'user' }),
            }
        });
        const accessRepository: jest.Mocked<AccessRepository> = {
            getAccessByIdentityIdAndExternalId: jest.fn().mockReturnValue(Object.assign(Access.prototype, {
                props: {
                    id: '123',
                    identity,
                    resourceIdentifier: 'project1',
                    permissions: new Set(['task:create', 'task:view']),
                }
            }))
        } as any;

        it('User ask access service, is he has access to create task in resource', async () => {
            const accessService = new AccessService(accessRepository);
            const hasAccess = await accessService.hasAccess(identity, 'externalId', 'task', 'create');

            expect(hasAccess).toBeTruthy();
        })
    })
})