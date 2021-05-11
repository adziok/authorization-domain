import { ValueObject } from '../../../../shared/interfaces/ValueObject';
import { InvalidEmailException } from '../exceptions/InvalidEmailException';

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(email: string): boolean {
    return emailRegex.test(email.toLowerCase());
}

export class EmailVO extends ValueObject<EmailVO> {
    private email: string;

    constructor(email: string) {
        super();
        if (!validateEmail(email)) {
            throw new InvalidEmailException();
        }
        this.email = email;
    }

    toString() {
        return this.email;
    }
}
