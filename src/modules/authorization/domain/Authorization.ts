import { EmailVO } from './value-objects/EmailVO';
import { HashedPasswordVO } from './value-objects/HashedPasswordVO';
import { InvalidConfirmationTokenException } from './exceptions/InvalidConfirmationTokenException';
import { UniqueId } from '../../../shared/interfaces/UniqueId';
import { PreviousPasswordEqualityException } from './exceptions/PreviousPasswordEqualityException';

type ExternalProvider = 'facebook' | 'google';

interface AuthorizationProps {
    id?: UniqueId;
    email: EmailVO;
    password: HashedPasswordVO;
    confirmationToken?: string | null;
    confirmedAt?: Date | null;
}

export class Authorization {
    private props: AuthorizationProps;

    constructor(props: AuthorizationProps) {
        this.props = props;
    }

    confirm(token: string) {
        if (token !== this.props.confirmationToken) {
            throw new InvalidConfirmationTokenException();
        }
        this.props.confirmationToken = null;
        this.props.confirmedAt = new Date();
    }

    setNewPassword(newPassword: HashedPasswordVO) {
        if (this.props.password.equals(newPassword)) {
            throw new PreviousPasswordEqualityException();
        }

        this.props.password = newPassword;
        // EMIT new password event;
    }

    get id() {
        return this.props.id;
    }

    get email() {
        return this.props.email;
    }

    get password() {
        return this.props.password;
    }

    get isConfirmed() {
        return this.props.confirmationToken === null;
    }
}
