import React, {Component} from 'react';
import { Button } from 'reactstrap';


const ButtonLink = ({active, children, onClick}) => {
    return (
        <Button color={active ? 'primary' : 'secondary'} onClick={onClick}>{children}</Button>
    );
};

export default ButtonLink;
