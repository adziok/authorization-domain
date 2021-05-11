import { ValueObject } from '../../../../shared/interfaces/ValueObject';
import { InvalidPasswordLengthException } from '../exceptions/InvalidPasswordLengthException';

export class PasswordVO extends ValueObject<PasswordVO> {
    private password: string;

    constructor(password: string) {
        super();
        if (password.length < 8 || password.length > 50) {
            throw new InvalidPasswordLengthException({ min: 8, max: 50 });
        }
        this.password = password;
    }

    toString() {
        return this.password;
    }
}
