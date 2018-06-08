import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap'
class UserPage extends Component {
    render() {
        return (
            <Container className="py-3 pl-md-5 user-profile">
                <Row className="align-content-center justify-content-center">
                    <Col lg="4" md="6" sm="8" xs="10" style={{textAlign: 'center'}}>
                        <img className="main-avatar" src="./img/man-avatar.png" alt=""/>
                        <div className="info">
                            <h1 className="name">Max</h1>
                            <h5>10.02.1997</h5>
                            <p><strong>Aquarius</strong></p>
                            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                        </div>
                        <a href="">Edit</a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UserPage;
