import React, {Component} from 'react';
import '../../App.css';
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import NotificationManagerContainer from '../../containers/NotificationManager/NotificationManagerContainer'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />

                <Main />
                <NotificationManagerContainer />
                {/*<NewPage />*/}
                {/*<UserPage />*/}
                {/*<LoginPage />*/}
            </div>
        );
    }
}

export default HomePage;
