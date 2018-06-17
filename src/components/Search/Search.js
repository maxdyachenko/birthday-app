import React, {Component} from 'react';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
} from 'reactstrap';

class Search extends Component {
    constructor(props) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        this.props.onSearch(e.target.value);
    }

    render() {
        return (
            <Row>
                <Col md="3" sm="6">
                    <Form>
                        <FormGroup>
                            <Input type="search" name="search" id="exampleSearch" placeholder="Search" onChange={this.handleOnChange} />
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default Search;
