import React from 'react'
import {Alert} from 'reactstrap'

const NotificationManager = ({notification}) => {
    return (
        <Alert className="notification" isOpen={notification.isOpen}>{notification.text}</Alert>
    );
};

export default NotificationManager;