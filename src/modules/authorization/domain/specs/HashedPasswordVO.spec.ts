import { HashedPasswordVO } from '../value-objects/HashedPasswordVO';

describe('HashedPasswordVO', () => {
    describe('-->  new()', () => {
        it('# should create new HashedPasswordVO', () => {
            const hashString = 'HashedPassword$';
            const hashedPassword = new HashedPasswordVO(hashString);
            expect(hashedPassword.toString()).toEqual(hashString);
        });
    })
});