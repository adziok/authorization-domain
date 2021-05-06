export abstract class ValueObject<T> {
    equals(otherValueObject: T): boolean {
        return JSON.stringify(this) === JSON.stringify(otherValueObject);
    }
}
