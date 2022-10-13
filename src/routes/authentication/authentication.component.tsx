import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sing-up-form/sign-up-form.component";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    );
};

export default Authentication;
