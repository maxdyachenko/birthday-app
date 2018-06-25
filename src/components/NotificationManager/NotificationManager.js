import React from 'react'
import {Alert} from 'reactstrap'

const NotificationManager = ({notification}) => {
    return notification ? (
        <Alert className="notification">{notification}</Alert>
    ) : null;
};

export default NotificationManager;