import React, {Component} from 'react';
import './Filter.css';
import {
    Col,
    Collapse
} from 'reactstrap';
import FilterLinkContainer from '../../containers/Filters/FilterLinkContainer'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBar from '@fortawesome/fontawesome-free-solid/faBars'
import * as constants from '../../utils/constants'

class Filter extends Component {
    state = {
        isOpen: false
    };

    toggle =() => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <Col md='12' className="filters-wrap">
                <FontAwesomeIcon icon={faBar} size="lg" className="bar-icon" onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} >
                    <FilterLinkContainer filter={constants.SHOW_ALL}>All</FilterLinkContainer>
                    <FilterLinkContainer filter={constants.SHOW_FAMILY}>Family</FilterLinkContainer>
                    <FilterLinkContainer filter={constants.SHOW_FRIENDS}>Friends</FilterLinkContainer>
                    <FilterLinkContainer filter={constants.SHOW_WORK}>Work</FilterLinkContainer>
                    <FilterLinkContainer filter={constants.SHOW_OTHERS}>Others</FilterLinkContainer>
                </Collapse>
            </Col>
        );
    }
}

export default Filter;
