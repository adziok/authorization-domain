import { AuthorizationFactory } from '../factories/AuthorizationFactory';
import { IConfirmationTokenService } from '../services/IConfirmationTokenService';
import { IHashingService } from '../services/IHashingService';
import { EmailVO } from '../value-objects/EmailVO';
import { PasswordVO } from '../value-objects/PasswordVO';

describe('AuthorizationFactory', () => {
    let authorizationFactory: AuthorizationFactory;
    beforeEach(() => {
        const hashingService: jest.Mocked<IHashingService> = {
            hashPassword: jest.fn().mockImplementation((password) => `${password}$`),
            comparePasswords: jest.fn(),
        };
        const confirmationTokenService: jest.Mocked<IConfirmationTokenService> = {
            generate: jest.fn().mockImplementation((code) => `code`),
        };
        authorizationFactory = new AuthorizationFactory(hashingService, confirmationTokenService);
    });

    describe('-->  create()', () => {
        it('# should create new unconfirmed Authorization, with hashed password', async () => {
            const emailString = 'test@test.com';
            const passwordString = 'password';
            const email = new EmailVO(emailString);
            const password = new PasswordVO('password');
            const authorization = await authorizationFactory.create(email, password);

            expect(authorization.email.toString()).toEqual(emailString);
            expect(authorization.isConfirmed).toEqual(false);
            expect(authorization.password.toString()).toEqual(`${passwordString}$`);
        });
    });
});
