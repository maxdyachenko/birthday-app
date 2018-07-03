import React from 'react';
import Table from '../../containers/Table/TableGridContainer.js'
import SearchContainer from '../../containers/Search/SearchContainer.js'
import Filter from '../Filters/Filter.js'
import {
    Container,
    Row,
} from 'reactstrap';

const Main = () =>{
    return (
        <Container className="py-3 pl-md-5">
            <SearchContainer />
            <Row>
                <Filter />
            </Row>
            <Table />
        </Container>
    );
};

export default Main;
