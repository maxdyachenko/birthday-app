import '../../components/LoginPage/LoginPage.css';
import {Col, Container, Row} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {getAuthUser} from '../../selectors';
import {MAIN} from '../../constants/routes';
import SignInC from './SignInContainer';
import SignUpC from './SignUpContainer';
import TabGroup from '../../components/LoginPage/TabGroup';
import auth from '../../hoc/auth';

const SignUpContainer = auth(SignUpC);
const SignInContainer = auth(SignInC);

class LoginPageContainer extends Component {
  state = {
    active: 'login',
  };

  toggle = item => {
    this.setState({
      active: item,
    });
  };

  render() {
    return Object.keys(this.props.isAuthentificated).length ? (
      <Redirect to={MAIN} />
    ) : (
      <Container>
        <Row>
          <Col md={{size: 6, offset: 3}}>
            <div className="panel panel-login">
              <TabGroup onToggle={this.toggle} active={this.state.active} />
              <Col className="panel-body">
                <Row>
                  <Col lg="12">
                    <SignInContainer
                      className={
                        this.state.active === 'login' ? 'active' : null
                      }
                    />
                    <SignUpContainer
                      className={
                        this.state.active === 'register' ? 'active' : null
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isAuthentificated: getAuthUser(state),
});

export default connect(mapStateToProps)(LoginPageContainer);
