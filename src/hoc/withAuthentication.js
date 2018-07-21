import React from 'react'
import {connect} from 'react-redux'
import {auth} from '../firebase/firebase'
import {setAuthUser} from '../actions'


const withAuthentication = (WrappedComponent) => {
    class WithAuthentication extends React.Component {
        componentDidMount() {
            const {onSetAuthUser} = this.props;

            auth.onAuthStateChanged(authUser => {
                authUser
                    ? onSetAuthUser(authUser)
                    : onSetAuthUser(null);
            });
        }

        render() {
            return (
                <WrappedComponent />
            );
        }
    }

    const mapDispatchToProps = (dispatch) => ({
        onSetAuthUser: (authUser) => dispatch(setAuthUser(authUser)),
    });

    return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;