import { BaseDomainException } from '../../../../shared/interfaces/BaseDomainException';

export class InvalidEmailException extends BaseDomainException {
    constructor() {
        super('Invalid email');
    }
}
