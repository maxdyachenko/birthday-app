import React from 'react'
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    FormFeedback
} from 'reactstrap'

const SignIn = ({className, handleChange, handleSubmit, state}) => {
    return (
        <Form
            id="login-form"
            role="form"
            style={{display: className ? 'block' : 'none'}}

        >
            <FormGroup>
                <Input
                    type="email"
                    name="email"
                    id="email-login"
                    tabIndex="1"
                    className="form-control"
                    placeholder="example@mail.com"
                    value={state.email || ''}
                    onChange={handleChange}
                    required="true"
                    invalid={state.emailError}
                />
                <FormFeedback>Should not be empty</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Input
                    type="password"
                    name="password"
                    id="password-login"
                    tabIndex="2"
                    className="form-control"
                    placeholder="Password"
                    value={state.password || ''}
                    onChange={handleChange}
                    invalid={state.passwordError}
                />
                <FormFeedback>Should be less than 20 chars and not empty</FormFeedback>
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
                            <a href="" tabIndex="5"
                               className="forgot-password">Forgot Password?</a>
                        </div>
                    </Col>
                </Row>
            </FormGroup>
        </Form>
    )
};

export default SignIn;