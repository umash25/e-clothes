import React from 'react';

import './signinandsignup.scss';
import SignUp from '../../components/signup/signup.jsx'
import SignIn from '../../components/signin/signin.jsx'

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp;