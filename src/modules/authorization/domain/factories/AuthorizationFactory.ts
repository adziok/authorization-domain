import { EmailVO } from '../value-objects/EmailVO';
import { PasswordVO } from '../value-objects/HashedPasswordVO';
import { IHashingService } from '../services/IHashingService';
import { IConfirmationTokenService } from '../services/IConfirmationTokenService';
import { Authorization } from '../Authorization';


export class AuthorizationFactory {
    constructor(private hashingService: IHashingService, private confirmationTokenService: IConfirmationTokenService) { }

    async create(email: EmailVO, password: PasswordVO) {
        const hashedPassword = await this.hashingService.hashPassword(password);
        const confirmationToken = await this.confirmationTokenService.generate();
        const authorization = Authorization.create(email, hashedPassword, confirmationToken);

        return authorization;
    }
}
