import React from 'react';
import {Row, Col, Form, FormGroup, Input} from 'reactstrap';
import propTypes from 'prop-types';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';

// Maybe better make hoc for SignUp and SignIn, a lot of code repeat
const SignIn = ({className, handleChange, handleSubmit, state, error}) => (
  <Form
    id="login-form"
    role="form"
    style={{display: className ? 'block' : 'none'}}>
    <FormGroup>
      <InputEmail
        id="email-login"
        tabIndex={1}
        value={state.email || ''}
        onChange={handleChange}
        emailErorr={state.emailErorr}
      />
    </FormGroup>
    <FormGroup>
      <InputPassword
        id="password-login"
        tabindex={2}
        value={state.password || ''}
        onChange={handleChange}
        invalid={state.passwordError}
      />
    </FormGroup>
    <FormGroup className="text-center">
      <Input
        type="checkbox"
        tabIndex="3"
        className=""
        name="remember"
        id="remember"
      />
      <label htmlFor="remember"> Remember Me</label>
    </FormGroup>
    {error ? <p className="error">{error}</p> : null}
    <FormGroup>
      <Row>
        <Col sm={{size: 6, offset: 3}}>
          <Input
            type="submit"
            name="login-submit"
            id="login-submit"
            tabIndex="4"
            className="form-control btn btn-login"
            value="Log In"
            onClick={handleSubmit}
          />
        </Col>
      </Row>
    </FormGroup>
    <FormGroup>
      <Row>
        <Col lg="12">
          <div className="text-center">
            <a href="" tabIndex="5" className="forgot-password">
              Forgot Password?
            </a>
          </div>
        </Col>
      </Row>
    </FormGroup>
  </Form>
);

SignIn.propTypes = {
  className: propTypes.string,
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  state: propTypes.object.isRequired,
  error: propTypes.string,
};

export default SignIn;
