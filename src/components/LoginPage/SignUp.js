import React from 'react';
import {Row, Col, Form, FormGroup, Input, FormFeedback} from 'reactstrap';
import propTypes from 'prop-types';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';

// Maybe better make hoc for SignUp and SignIn, a lot of code repeat
const SignUp = ({className, handleChange, state, handleSubmit, error}) => (
  <Form
    id="register-form"
    action=""
    method="post"
    role="form"
    className={className}
    style={{display: className ? 'block' : 'none'}}>
    <FormGroup className="form-group">
      <Input
        type="text"
        name="username"
        id="username-reg"
        tabIndex="1"
        className="form-control"
        placeholder="Username"
        onChange={handleChange}
        value={state.username || ''}
        invalid={state.usernameError}
      />
      <FormFeedback>Should not be empty and less than 20 chars</FormFeedback>
    </FormGroup>
    <FormGroup>
      <InputEmail
        id="email-reg"
        tabIndex={2}
        value={state.email || ''}
        onChange={handleChange}
        emailErorr={state.emailErorr}
      />
    </FormGroup>
    <FormGroup>
      <InputPassword
        id="password-reg"
        tabindex={3}
        value={state.password || ''}
        onChange={handleChange}
        invalid={state.passwordError}
      />
    </FormGroup>
    <FormGroup>
      <Input
        type="password"
        name="confirmPassword"
        id="confirmPassword-reg"
        tabIndex="4"
        className="form-control"
        placeholder="Confirm Password"
        onChange={handleChange}
        value={state.confirmPassword || ''}
        invalid={state.confirmPasswordError}
      />
      <FormFeedback>Passwords do not match</FormFeedback>
    </FormGroup>
    {error ? <p className="error">{error}</p> : null}
    <FormGroup>
      <Row>
        <Col sm={{size: 6, offset: 3}}>
          <Input
            type="submit"
            name="register-submit"
            id="register-submit"
            tabIndex="5"
            className="form-control btn btn-register"
            value="Register Now"
            onClick={handleSubmit}
          />
        </Col>
      </Row>
    </FormGroup>
  </Form>
);

SignUp.propTypes = {
  className: propTypes.string,
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  state: propTypes.object.isRequired,
  error: propTypes.string,
};

export default SignUp;
