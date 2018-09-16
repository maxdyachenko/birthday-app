import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import SignInForm from '../../components/LoginPage/SignIn';
import {doSignInWithEmailAndPassword} from '../../firebase/auth';
import * as routes from '../../constants/routes';
import withLoader from '../../hoc/loader';

const SingInFormWithLoading = withLoader(SignInForm);

class SignInContainer extends Component {
  state = {
    error: '',
    isLoading: false,
  };

  handleSubmit = event => {
    event.preventDefault();

    if (!this.hasErrors()) {
      const {state, dispatch} = this.props;
      this.setState({isLoading: true});

      doSignInWithEmailAndPassword(state.email, state.password)
        .then(() => this.setState({isLoading: false}))
        .then(() => {
          dispatch(push(routes.MAIN));
        })
        .catch(error => {
          this.setState({error: error.message});
        });
    }
  };

  hasErrors = () => {
    const {state, hasPasswordErrors, hasEmailErrors} = this.props;

    return hasEmailErrors(state.email) || hasPasswordErrors(state.password);
  };

  render() {
    return (
      <SingInFormWithLoading
        {...this.props}
        isLoading={this.state.isLoading}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
      />
    );
  }
}

export default connect()(SignInContainer);
