import React, {Component} from 'react'
import './LoginPage.css'
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input
} from 'reactstrap'


//a lot of UI
//TODO make hoc or divide on components
class LoginPage extends Component {
    state = {
        active: 'login'
    };

    toggle = (item) => {
        this.setState({
            active: item
        })
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        <div className="panel panel-login">
                            <Col className="panel-heading">
                                <Row>
                                    <Col xs="6">
                                        <button
                                            className={this.state.active === 'login' ? 'active' : null}
                                            id="login-form-link"
                                            onClick={() => this.toggle('login')}
                                        >
                                            Login
                                        </button>
                                    </Col>
                                    <Col xs="6">
                                        <button
                                            className={this.state.active === 'register' ? 'active' : null}
                                            id="register-form-link"
                                            onClick={() => this.toggle('register')}
                                        >
                                            Register
                                        </button>
                                    </Col>
                                </Row>
                                <hr />
                            </Col>
                            <Col className="panel-body">
                                <Row>
                                    <Col lg="12">
                                        <Form id="login-form"
                                              action=""
                                              method="post"
                                              role="form"
                                              className={this.state.active === 'login' ? 'active' : null}
                                              style={{display: this.state.active === 'login' ? 'block' : 'none'}}

                                        >
                                            <FormGroup>
                                                <Input type="text" name="username" id="username-login" tabIndex="1"
                                                       className="form-control" placeholder="Username" value=""/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="password" name="password" id="password-login" tabIndex="2"
                                                       className="form-control" placeholder="Password"/>
                                            </FormGroup>
                                            <FormGroup className="text-center">
                                                <Input type="checkbox" tabIndex="3" className="" name="remember"
                                                       id="remember"/>
                                                <label htmlFor="remember"> Remember Me</label>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col sm={{size: 6, offset: 3}}>
                                                        <input type="submit" name="login-submit" id="login-submit"
                                                               tabIndex="4" className="form-control btn btn-login"
                                                               value="Log In"/>
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
                                        <Form id="register-form"
                                              action=""
                                              method="post" role="form"
                                              className={this.state.active === 'register' ? 'active' : null}
                                              style={{display: this.state.active === 'register' ? 'block' : 'none'}}
                                        >
                                            <FormGroup className="form-group">
                                                <Input type="text" name="username" id="username-reg" tabIndex="1"
                                                       className="form-control" placeholder="Username" value=""/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="email" name="email" id="email" tabIndex="1"
                                                       className="form-control" placeholder="Email Address" value=""/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="password" name="password" id="password-reg" tabIndex="2"
                                                       className="form-control" placeholder="Password"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="password" name="confirm-password" id="confirm-password"
                                                       tabIndex="2" className="form-control"
                                                       placeholder="Confirm Password"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col sm={{size: 6, offset: 3}}>
                                                        <Input type="submit" name="register-submit" id="register-submit"
                                                               tabIndex="4" className="form-control btn btn-register"
                                                               value="Register Now"/>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                        </Form>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LoginPage;
