import React, {Component} from 'react';
import Table from '../../containers/Table/TableGridContainer.js'
import SearchContainer from '../../containers/Search/SearchContainer.js'
import Filter from '../Filters/Filter.js'
import View from '../Filters/View.js'
import {
    Container,
    Row,
} from 'reactstrap';

class Main extends Component {
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
            <Container className="py-3 pl-md-5">
                <SearchContainer />
                <Row>
                    <Filter />
                    <View />
                </Row>
                <Table />
            </Container>
        );
    }
}

export default Main;
