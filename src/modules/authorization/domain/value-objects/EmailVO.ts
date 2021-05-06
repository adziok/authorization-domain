import { ValueObject } from '../../../../shared/interfaces/ValueObject';
import { InvalidEmailException } from '../exceptions/InvalidEmailException';

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export class EmailVO extends ValueObject<EmailVO> {
    private email: string;

    constructor(email: string) {
        super();
        if (!email.match(emailRegex)) {
            throw new InvalidEmailException();
        }
        this.email = email;
    }

    toString() {
        return this.email;
    }
}
