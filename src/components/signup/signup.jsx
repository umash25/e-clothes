import React, { useState } from 'react';

import './signup.scss';
import FormInput from '../../components/form-input/form-input.jsx';
import CustomButton from '../../components/custom-button/custom-button.jsx';
import { signUpStart } from '../../redux/users/user.action';
import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords doesn't match");
        };
        signUpStart({ displayName, email, password });
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <div className="sign-up">
            <h2 className="title">I don't have an account</h2>
            <span>Sign up with your credentials</span>

            <form onSubmit={handleSubmit} >
                <FormInput name="displayName"
                    type="text"
                    label="Name"
                    value={displayName}
                    handleChange={handleChange}
                    required />
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
                <FormInput name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    value={confirmPassword}
                    handleChange={handleChange}
                    required />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);