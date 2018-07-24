import React from 'react'
import {Row, Col} from 'reactstrap'
import propTypes from 'prop-types'

const TabGroup = ({active, onToggle}) => (
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
);

TabGroup.propTypes = {
    active: propTypes.string.isRequired,
    onToggle: propTypes.func.isRequired
};

export default TabGroup;