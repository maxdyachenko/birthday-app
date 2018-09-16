import React from 'react';
import Header from '../../containers/Header/HeaderContainer.js';
import Main from '../Main/Main.js';
import NotificationManagerContainer from '../../containers/NotificationManager/NotificationManagerContainer';

const HomePage = () => (
  <div>
    <Header />
    <Main />
    <NotificationManagerContainer />
  </div>
);

export default HomePage;
