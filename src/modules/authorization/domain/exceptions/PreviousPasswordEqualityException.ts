import { BaseDomainException } from '../../../../shared/interfaces/BaseDomainException';

export class PreviousPasswordEqualityException extends BaseDomainException {
    constructor() {
        super('Previous password equality');
    }
}
