import { HashedPasswordVO } from '../value-objects/HashedPasswordVO';
import { PasswordVO } from '../value-objects/PasswordVO';

export interface IHashingService {
    hashPassword(password: PasswordVO): HashedPasswordVO;
    comparePasswords(password: PasswordVO, hashedPassword: HashedPasswordVO): boolean;
}
