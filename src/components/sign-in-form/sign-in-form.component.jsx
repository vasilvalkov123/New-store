import { useState } from "react";

import { createUserDocumentFromAuth,singInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-in.form.style.scss';


const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await singInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);

            resetFormFields();
        } catch(error) {
            console.log(error);
        }
    };

    const handeChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className="sign-up-container">
            <h2> Already have an account?</h2>
            <span>Sing up with your email and possword</span>

            <form onSubmit={handleSubmit}>
                <FormInput label="Email" text="email" required onChange={handeChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handeChange} name="password" value={password}/>
                
                <div className="buttons-container">
                    <Button type="submit">Sign Up</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType='google'>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;