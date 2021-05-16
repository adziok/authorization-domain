export class DisplayedName {
    private value: string;
    constructor(newName: string) {
        if (newName.length > 100) {
            throw new Error('Displayed name is too long');
        }

        if (newName.length < 4) {
            throw new Error('Displayed name is too short');
        }
        this.value = newName;
    }

    toString(): string {
        return this.value;
    }
}
