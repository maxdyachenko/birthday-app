import React, {Component} from 'react';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';
import SignUpForm from '../../components/LoginPage/SignUp';
import {doCreateUserWithEmailAndPassword} from '../../firebase/auth';
import {doCreateUser} from '../../firebase/database';
import {MAIN} from '../../constants/routes';

class SignUpContainer extends Component {
  state = {
    error: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    if (!this.hasErrors()) {
      const {state, dispatch} = this.props;

      doCreateUserWithEmailAndPassword(state.email, state.password)
        .then(authUser => {
          doCreateUser(authUser.user.uid, state.username, state.email)
            .then(() => dispatch(push(MAIN)))
            .catch(error => {
              this.setState({error: error.message});
            });
        })
        .catch(error => {
          this.setState({error: error.message});
        });
    }
  };

  hasErrors = () => {
    const {
      state,
      hasPasswordErrors,
      hasEmailErrors,
      hasNameErrors,
      hasConfirmPasswordErrors,
    } = this.props;

    return (
      hasNameErrors(state.username) ||
      hasEmailErrors(state.email) ||
      hasPasswordErrors(state.password) ||
      hasConfirmPasswordErrors(state.password, state.confirmPassword)
    );
  };

  render() {
    return (
      <SignUpForm
        {...this.props}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
      />
    );
  }
}

export default connect()(SignUpContainer);
