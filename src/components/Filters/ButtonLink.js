import React from 'react'
import { Button } from 'reactstrap'
import propTypes from 'prop-types'

const ButtonLink = ({active, children, onClick}) => {
    return (
        <Button color={active ? 'primary' : 'secondary'} onClick={onClick}>{children}</Button>
    );
};

ButtonLink.propTypes = {
    active: propTypes.bool,
    onClick: propTypes.func.isRequired,
    children: propTypes.node.isRequired
};

export default ButtonLink;
