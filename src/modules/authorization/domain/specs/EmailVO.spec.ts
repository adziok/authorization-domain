import { EmailVO } from '../value-objects/EmailVO';
import { InvalidEmailException } from '../exceptions/InvalidEmailException';

describe('EmailVO', () => {
    describe('-->  new()', () => {
        it('# should create new EmailVO', () => {
            const emailString = 'test@email.com';
            const email = new EmailVO(emailString);
            expect(email.toString()).toEqual(emailString);
        });

        it('# should throw when email is invalid (missing domain iso)', () => {
            const emailString = 'test@email';
            expect(() => new EmailVO(emailString)).toThrow(InvalidEmailException);
        });

        it('# should throw when email is invalid', () => {
            const emailString = 'test@email.';
            expect(() => new EmailVO(emailString)).toThrow(InvalidEmailException);
        });
    })
});