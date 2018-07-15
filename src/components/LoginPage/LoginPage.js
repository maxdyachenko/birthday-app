import React, {Component} from 'react'
import SignUpC from '../../containers/LoginPage/SignUpContainer'
import SignInC from '../../containers/LoginPage/SignInContainer'
import TabGroup from './TabGroup'
import auth from '../../hoc/auth'
import './LoginPage.css'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

const SignUpContainer = auth(SignUpC);
const SignInContainer = auth(SignInC);

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
                            <TabGroup onToggle={this.toggle} active={this.state.active} />
                            <Col className="panel-body">
                                <Row>
                                    <Col lg="12">
                                        <SignInContainer
                                            className={this.state.active === 'login' ? 'active' : null}
                                        />
                                        <SignUpContainer
                                            className={this.state.active === 'register' ? 'active' : null}
                                        />
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

export default LoginPage