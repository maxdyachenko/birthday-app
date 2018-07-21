import React, {Component} from 'react'
import SignInForm from '../../components/LoginPage/SignIn'
import {doSignInWithEmailAndPassword} from '../../firebase/auth'
import * as routes from '../../constants/routes'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'

class SignInContainer extends Component {
    state = {
        error: ''
    };

   handleSubmit = (event) => {
       event.preventDefault();

       if(!this.hasErrors()){
           const {state, dispatch} = this.props;

           doSignInWithEmailAndPassword(state.email, state.password)
               .then( () => {
                    this.props.dispatch(push(routes.MAIN))
               })
               .catch(error => {
                   this.setState({error: error.message});
               });
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
                error={this.state.error}
            />
        )
    }
}

export default connect()(SignInContainer)