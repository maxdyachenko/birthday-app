import React, {Component} from 'react';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
} from 'reactstrap';

class Main extends Component {
    render() {
        return (
            <Row>
                <Col md="3" sm="6">
                    <Form>
                        <FormGroup>
                            <Input type="search" name="search" id="exampleSearch" placeholder="Search" />
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default Main;
