type IdentityTypes = 'person' | 'integration';

export class IdentityType {
    private value: IdentityTypes;

    constructor(identityType: IdentityTypes) {
        this.value = identityType;
    }

    toString(): string {
        return this.value;
    }
}
