import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {getAuthUser} from '../../selectors'
import AuthentificatedAllowed from '../../components/AuthentificatedAllowed/AuthentificatedAllowed'
import propTypes from 'prop-types'

const PrivateRoute = ({component: Component, isAuthentificated, ...rest }) => (
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
    isAuthentificated: propTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        isAuthentificated: getAuthUser(state)
    }
};

export default connect(mapStateToProps)(PrivateRoute);