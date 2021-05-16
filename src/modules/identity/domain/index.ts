import { Identity } from "./Identity";

interface AuthorizationStrategy {

}

interface AuthorizationService {
    authorize(strategy: AuthorizationStrategy): Identity;
}

