import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {getAuthUser} from '../../selectors';
import AuthentificatedAllowed from '../../components/AuthentificatedAllowed/AuthentificatedAllowed';

const PrivateRoute = ({component: Component, isAuthentificated, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      Object.keys(isAuthentificated).length ? (
        <Component {...props} />
      ) : (
        <AuthentificatedAllowed />
      )
    }
  />
);

PrivateRoute.propTypes = {
  isAuthentificated: propTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isAuthentificated: getAuthUser(state),
});

export default connect(mapStateToProps)(PrivateRoute);
