import { ValueObject } from './ValueObject';

export class UniqueId extends ValueObject<UniqueId> {
    constructor(private id: string) {
        super();
    }

    toString() {
        return this.id;
    }
}
