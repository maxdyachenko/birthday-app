import React from 'react'

function auth(WrappedComponent) {
    return class Auth extends React.Component {
        state = {};

        handleChange = (event) => {
            const value = event.target.value;
            const name = event.target.name;

            this.setState({
                [name]: value
            });
        };

        // !0 - true
        // !1 - false
        // !-1 - false
        hasConfirmPasswordErrors = (password1, password2) => {
            if (!!password1.localeCompare(password2)) {
                this.setState({confirmPasswordError: true});
                return true;
            }
            this.setState({confirmPasswordError: false});
            return false;
        };

        hasNameErrors = (username) => {
            if (!username || username.length > 20) {
                this.setState({usernameError: true});
                return true;
            }
            this.setState({usernameError: false});
            return false;
        };

        hasEmailErrors = (email) => {
            if (!email) {
                this.setState({emailError: true});
                return true;
            }
            this.setState({emailError: false});
            return false;
        };

        hasPasswordErrors = (password) => {
            if (!password || password.length > 20) {
                this.setState({passwordError: true});
                return true;
            }
            this.setState({passwordError: false});
            return false;
        };

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    state={this.state}
                    handleChange={this.handleChange}
                    hasPasswordErrors={this.hasPasswordErrors}
                    hasEmailErrors={this.hasEmailErrors}
                    hasNameErrors={this.hasNameErrors}
                    hasConfirmPasswordErrors={this.hasConfirmPasswordErrors}
                />
            );
        }
    }
}

export default auth;