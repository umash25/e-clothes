import React from 'react';

import './signup.scss';
import FormInput from '../../components/form-input/form-input.jsx';
import CustomButton from '../../components/custom-button/custom-button.jsx';
import { auth, createUserProfileDocument } from '../../firebase/firebase.js'

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords doesn't match");
        }
        try {
            const user = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log("Error in creating profile", error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your credentials</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput name="displayName"
                        type="text"
                        label="Name"
                        value={displayName}
                        handleChange={this.handleChange}
                        required />
                    <FormInput name="email"
                        type="email"
                        label="Email"
                        value={email}
                        handleChange={this.handleChange}
                        required />
                    <FormInput name="password"
                        type="password"
                        label="Password"
                        value={password}
                        handleChange={this.handleChange}
                        required />
                    <FormInput name="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required />
                    <CustomButton type="Submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;