import { DisplayedName } from "./DisplayedName";
import { IdentityType } from "./IdentityType";

interface IdentityProps {
    id: string;
    displayedName: DisplayedName;
    image: string;
    type: IdentityType;
}

export class Identity {
    private props: IdentityProps;

    changeDisplayedName(newDisplayedName: DisplayedName) {
        this.props.displayedName = newDisplayedName;
    }

    get id(): string {
        return this.props.id;
    }

    get displayedName(): DisplayedName {
        return this.props.displayedName;
    }
}
