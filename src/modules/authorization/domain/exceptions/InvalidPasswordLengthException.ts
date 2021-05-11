import { BaseDomainException } from '../../../../shared/interfaces/BaseDomainException';

export class InvalidPasswordLengthException extends BaseDomainException {
    constructor(opts: { min: number; max: number }) {
        super(`Password should have length between ${opts.min} and ${opts.max}`);
    }
}
