import React from 'react';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
} from 'reactstrap';

const Search = ({onChange}) => {
    return (
        <Row>
            <Col md="3" sm="6">
                <Form>
                    <FormGroup>
                        <Input type="search" name="search" id="exampleSearch" placeholder="Search"
                               onChange={onChange}
                        />
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    );
};

export default Search;
