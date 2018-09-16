import React, {Component} from 'react';
import {connect} from 'react-redux';
import {doSignOut} from '../../firebase/auth';
import Header from '../../components/Header/Header';

class HeaderContainer extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  logOut = () => {
    doSignOut();
  };

  render() {
    return (
      <Header toggle={this.toggle} state={this.state} onLogout={this.logOut} />
    );
  }
}

export default connect()(HeaderContainer);
