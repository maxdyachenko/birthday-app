import React from 'react'
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    FormFeedback
} from 'reactstrap'

const SignUp = ({className, handleChange, state, handleSubmit, error}) => {
    return (
        <Form id="register-form"
              action=""
              method="post" role="form"
              className={className}
              style={{display: className ? 'block' : 'none'}}
        >
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
                <Input
                    type="email"
                    name="email"
                    id="email-reg"
                    tabIndex="1"
                    className="form-control"
                    placeholder="Email Address"
                    onChange={handleChange}
                    value={state.email || ''}
                    invalid={state.emailError}
                />
                <FormFeedback>Should not be empty</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Input
                    type="password"
                    name="password"
                    id="password-reg"
                    tabIndex="2"
                    className="form-control"
                    placeholder="Password"
                    onChange={handleChange}
                    value={state.password || ''}
                    invalid={state.passwordError}
                />
                <FormFeedback>Should not be empty and less than 20 chars</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword-reg"
                    tabIndex="2"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={state.confirmPassword|| ''}
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
                            tabIndex="4"
                            className="form-control btn btn-register"
                            value="Register Now"
                            onClick={handleSubmit}
                        />
                    </Col>
                </Row>
            </FormGroup>
        </Form>
    )
};

export default SignUp;