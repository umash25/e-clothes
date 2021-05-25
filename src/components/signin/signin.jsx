import React, { useState } from 'react';

import './signin.scss';
import FormInput from '../../components/form-input/form-input.jsx';
import CustomButton from '../../components/custom-button/custom-button.jsx';
import { connect } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/users/user.action';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    };

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit} >
                <FormInput name="email"
                    type="email"
                    label="Email"
                    value={email}
                    handleChange={handleChange}
                    required />
                <FormInput name="password"
                    type="password"
                    label="Password"
                    value={password}
                    handleChange={handleChange}
                    required />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button"
                        isGoogleSignIn
                        onClick={googleSignInStart}>
                        { }
                        Sign In with Google{ }
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);