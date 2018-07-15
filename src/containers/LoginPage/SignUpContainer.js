import React, {Component} from 'react'
import SignUpForm from '../../components/LoginPage/SignUp'

class SignUpContainer extends Component {
    handleSubmit = (event) => {
        event.preventDefault();

        if(!this.hasErrors()){
            console.log("sign up ok")
            //dispatch action here
        }
    };

    hasErrors = () => {
        const {state, hasPasswordErrors, hasEmailErrors, hasNameErrors, hasConfirmPasswordErrors} = this.props;

        return hasNameErrors(state.username) ||
            hasEmailErrors(state.email) ||
            hasPasswordErrors(state.password) ||
            hasConfirmPasswordErrors(state.password, state.confirmPassword)
    };

    render() {
        return (
            <SignUpForm
                {...this.props}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default SignUpContainer