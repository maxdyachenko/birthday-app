import React, {Component} from 'react'
import SignInForm from '../../components/LoginPage/SignIn'

class SignInContainer extends Component {
   handleSubmit = (event) => {
       event.preventDefault();

       if(!this.hasErrors()) {
           console.log("sign in ok")
           //dispatch action here
       }
   };

    hasErrors = () => {
        const {state, hasPasswordErrors, hasEmailErrors} = this.props;

        return hasEmailErrors(state.email) || hasPasswordErrors(state.password)
    };

    render() {
        return (
            <SignInForm
                {...this.props}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default SignInContainer