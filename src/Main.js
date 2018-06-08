import React, {Component} from 'react';
import './App.css';
import './Filters.css';
import Header from './Header.js'
import Table from './TableGrid.js'
import TableToday from './TableToday.js'
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    ButtonGroup
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBar from '@fortawesome/fontawesome-free-solid/faBars'
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
                <Row>
                    <Col md="3" sm="6">
                        <Form>
                            <FormGroup>
                                <Input type="search" name="search" id="exampleSearch" placeholder="Search" />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" className="filters-wrap">
                        <FontAwesomeIcon icon={faBar} size="lg" className="bar-icon" />
                        <Button color="secondary">All</Button>
                        <Button color="primary">Family</Button>
                        <Button color="secondary">Friends</Button>
                        <Button color="secondary">Work</Button>
                        <Button color="secondary">Other</Button>
                        Open filters by click
                    </Col>
                    <Col md="6" className="justify-content-end" style={{display: 'flex'}}>
                        <ButtonGroup>
                            <Button>Table</Button>
                            <Button>Calendar</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                {/*<TableToday />*/}
                <Table />
            </Container>
        );
    }
}

export default Main;
