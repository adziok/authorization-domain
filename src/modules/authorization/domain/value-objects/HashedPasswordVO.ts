import { ValueObject } from '../../../../shared/interfaces/ValueObject';

export class HashedPasswordVO extends ValueObject<HashedPasswordVO> {
    private value: string;

    constructor(password: string) {
        super();
        this.value = password;
    }

    toString() {
        return this.value;
    }
}
