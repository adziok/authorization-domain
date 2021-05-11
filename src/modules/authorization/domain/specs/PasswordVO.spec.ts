import { PasswordVO } from '../value-objects/PasswordVO';
import { InvalidPasswordLengthException } from '../exceptions/InvalidPasswordLengthException';

const generatePasswordWithGivenLength = (length: number) => 'a'.repeat(length);

describe('PasswordVO', () => {
    describe('-->  new()', () => {
        it('# should throw when length is to short', () => {
            const passwordWithLessThan8Character = generatePasswordWithGivenLength(7);
            expect(() => new PasswordVO(passwordWithLessThan8Character)).toThrow(InvalidPasswordLengthException)
        });

        it('# should throw when length is to long', () => {
            const passwordWithMoreThan50Characters = generatePasswordWithGivenLength(51);
            expect(() => new PasswordVO(passwordWithMoreThan50Characters)).toThrow(InvalidPasswordLengthException)
        });

        it('# should create VO when length is exact as minimal required', () => {
            const passwordWith8Characters = generatePasswordWithGivenLength(8);
            const password = new PasswordVO(passwordWith8Characters);
            expect(password.toString()).toEqual(passwordWith8Characters);
        });

        it('# should create VO when length is exact as minimal required', () => {
            const passwordWith51Characters = generatePasswordWithGivenLength(50);
            const password = new PasswordVO(passwordWith51Characters);
            expect(password.toString()).toEqual(passwordWith51Characters);
        });
    })
});