import React from 'react'
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import NotificationManagerContainer from '../../containers/NotificationManager/NotificationManagerContainer'

const HomePage = () => {
    return (
        <div>
            <Header />
            <Main />
            <NotificationManagerContainer />
        </div>
    );
};


export default HomePage;
