import { ValueObject } from '../../../../shared/interfaces/ValueObject';

export class HashedPasswordVO extends ValueObject<HashedPasswordVO> {
    private password: string;

    constructor(password: string) {
        super();
        this.password = password;
    }

    toString() {
        return this.password;
    }
}
