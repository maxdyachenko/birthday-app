import React, {Component} from 'react';
import Table from '../../containers/Table/TableGrid.js'
import Search from '../Search/Search.js'
import Filter from '../Filters/Filter.js'
import View from '../Filters/View.js'
import TableToday from '../Table/TableToday.js'
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
                <Search />
                <Row>
                    <Filter />
                    <View />
                </Row>
                {/*<TableToday />*/}
                <Table />
            </Container>
        );
    }
}

export default Main;
