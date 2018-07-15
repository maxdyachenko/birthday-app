import React from 'react'
import {
    Row,
    Col
} from 'reactstrap'

const TabGroup = ({active,onToggle}) => {
    return (
        <Col className="panel-heading">
            <Row>
                <Col xs="6">
                    <button
                        className={active === 'login' ? 'active' : null}
                        id="login-form-link"
                        onClick={() => onToggle('login')}
                    >
                        Login
                    </button>
                </Col>
                <Col xs="6">
                    <button
                        className={active === 'register' ? 'active' : null}
                        id="register-form-link"
                        onClick={() => onToggle('register')}
                    >
                        Register
                    </button>
                </Col>
            </Row>
            <hr />
        </Col>
    )
};

export default TabGroup;