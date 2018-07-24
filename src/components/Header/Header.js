import React from 'react'
import {NavLink} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import faLogin from '@fortawesome/fontawesome-free-solid/faSignInAlt'
import {MAIN} from '../../constants/routes'
import {ADD_BIRTH} from '../../constants/routes'
import propTypes from 'prop-types'

const activeStyle = {
    color: 'white',
    pointerEvents: 'none'
};

const navItemStyle = {
    display: 'flex',
    marginRight: '20px'
};

const Header = ({toggle, state, onLogout}) => (
    <header>
        <Navbar color="primary" dark expand="md">
            <NavLink to={MAIN} className="navbar-brand">BirthApp</NavLink>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem style={navItemStyle}>
                        <NavLink activeStyle={activeStyle} to={ADD_BIRTH} className="nav-link">
                            Add new <FontAwesomeIcon icon={faPlus} />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <button onClick={onLogout} className="nav-link">Logout <FontAwesomeIcon icon={faLogin} /></button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </header>
);

Header.propTypes = {
    toggle: propTypes.func.isRequired,
    state: propTypes.object.isRequired,
    onLogout: propTypes.func.isRequired
};

export default Header;
