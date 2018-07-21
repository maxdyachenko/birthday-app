import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose'
import {getAuthUser} from '../selectors'
import {auth} from '../firebase/firebase'
import * as routes from '../constants/routes'
import {push} from 'connected-react-router'

const withAuthorization = (condition) => (WrappedComponent) => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            auth.onAuthStateChanged(authUser => {
                if (!condition(authUser)) {
                    this.props.dispatch(push(routes.LOGIN));
                }
            });
        }

        render() {
            return this.props.authUser ? <WrappedComponent /> : null;
        }
    }

    const mapStateToProps = (state) => ({
        authUser: getAuthUser(state),
    });

    return connect(mapStateToProps)(WithAuthorization);
};

export default withAuthorization;