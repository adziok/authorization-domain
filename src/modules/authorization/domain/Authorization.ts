import { EmailVO } from './value-objects/EmailVO';
import { HashedPasswordVO } from './value-objects/PasswordVO';
import { InvalidConfirmationTokenException } from './exceptions/InvalidConfirmationTokenException';
import { UniqueId } from '../../../shared/interfaces/UniqueId';

interface AuthorizationProps {
    id?: UniqueId;
    email: EmailVO;
    password: HashedPasswordVO;
    confirmationToken?: string | null;
    confirmedAt?: Date | null;
}

export class Authorization {
    private props: AuthorizationProps;

    private constructor(props: AuthorizationProps) {
        this.props = props;
    }

    static create(email: EmailVO, password: HashedPasswordVO, confirmationToken: string) {
        return new Authorization({ email, password, confirmationToken });
    }

    confirm(token: string) {
        if (token !== this.props.confirmationToken) {
            throw new InvalidConfirmationTokenException();
        }
        this.props.confirmationToken = null;
        this.props.confirmedAt = new Date();
    }

    get id() {
        return this.props.id;
    }

    get email() {
        return this.props.email;
    }

    get isConfirmed() {
        return this.props.confirmationToken === null;
    }
}
