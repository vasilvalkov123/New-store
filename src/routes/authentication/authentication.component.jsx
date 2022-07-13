import SignUpForm from "../../components/sign-up-form/sing-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.style.scss';

const Authentication = () => {

    return (
        <div className="authentication-container">
            <SignInForm />

            <SignUpForm />
        </div>
    );
};

export default Authentication;