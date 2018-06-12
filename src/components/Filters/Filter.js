import React, {Component} from 'react';
import './Filter.css';
import {
    Col,
    Button,
    Collapse
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBar from '@fortawesome/fontawesome-free-solid/faBars'

class Filter extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Col md='12' className="filters-wrap">
                <FontAwesomeIcon icon={faBar} size="lg" className="bar-icon" onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} >
                    <Button color="secondary">All</Button>
                    <Button color="primary">Family</Button>
                    <Button color="secondary">Friends</Button>
                    <Button color="secondary">Work</Button>
                    <Button color="secondary">Other</Button>
                </Collapse>
            </Col>
        );
    }
}

export default Filter;
