import { HashedPasswordVO } from '../value-objects/PasswordVO';
import { PasswordVO } from '../value-objects/HashedPasswordVO';

export interface IHashingService {
    hashPassword(password: PasswordVO): HashedPasswordVO;
    comparePasswords(password: PasswordVO, hashedPassword: HashedPasswordVO): boolean;
}
