import SignupForm from './signupForm';
import SingnupFormSuccess from './singnupFormSuccess';
import React, {useState} from "react";

const Form = () =>{
    const [formIsSubmitted, setFormIsSubmitted]= useState(false);
    const submitForm = () =>{
        setFormIsSubmitted(true);
    }
    return (
        <div>
            {!formIsSubmitted ? <SignupForm submitForm={submitForm} /> : <SingnupFormSuccess/>}
        </div>
    )
}

export default Form;
