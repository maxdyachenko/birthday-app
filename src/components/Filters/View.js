import React, {Component} from 'react';
import {
    Col,
    Button,
    ButtonGroup
} from 'reactstrap';


class View extends Component {
    render() {
        return (
            <Col md="12" style={{display: 'flex'}}>
                <ButtonGroup>
                    <Button>Table</Button>
                    <Button>Calendar</Button>
                </ButtonGroup>
            </Col>
        );
    }
}

export default View;
