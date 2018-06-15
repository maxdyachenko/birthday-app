import React, {Component} from 'react';
import './Filter.css';
import {
    Col,
    Collapse
} from 'reactstrap';
import FilterLinkContainer from '../../containers/Filters/FilterLinkContainer'
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
                    <FilterLinkContainer filter="SHOW_ALL">All</FilterLinkContainer>
                    <FilterLinkContainer filter="SHOW_FAMILY">Family</FilterLinkContainer>
                    <FilterLinkContainer filter="SHOW_FRIENDS">Friends</FilterLinkContainer>
                    <FilterLinkContainer filter="SHOW_WORK">Work</FilterLinkContainer>
                </Collapse>
            </Col>
        );
    }
}

export default Filter;
