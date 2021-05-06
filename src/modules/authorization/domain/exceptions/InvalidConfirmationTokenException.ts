import { BaseDomainException } from '../../../../shared/interfaces/BaseDomainException';

export class InvalidConfirmationTokenException extends BaseDomainException {
    constructor() {
        super('Invalid confirmation token');
    }
}
