import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import {getZodiacSign} from '../../utils'

const UserPage = ({userData}) => {
    return (
        <Container className="py-3 pl-md-5 user-profile">
            <Row className="align-content-center justify-content-center">
                <Col lg="4" md="6" sm="8" xs="10" style={{textAlign: 'center'}}>
                    <img className="main-avatar img-responsive" src={userData.img || (userData.sex === 'male' ? '/img/man-avatar.png' : '/img/women-avatar.png')} alt="User"/>
                    <div className="info">
                        <h1 className="name">{userData.name}</h1>
                        <h5>{userData.date.format("DD-MM-YYYY")}</h5>
                        <p><strong>{getZodiacSign(userData.date)}</strong></p>
                        <div className="phone" style={{margin: '30px 0'}}>
                            <h5>Phone number</h5>
                            <p className="lead">{userData.tel}</p>
                        </div>
                        <p>{userData.info || null}</p>
                    </div>
                    <NavLink to={`/edit/${userData.id}`}>Edit</NavLink>
                </Col>
            </Row>
        </Container>
    );
};

export default UserPage;
