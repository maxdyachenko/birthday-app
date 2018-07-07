import React from 'react'
import {Alert} from 'reactstrap'
import propTypes from 'prop-types'

const NotificationManager = ({notification}) => {
    return (
        <Alert className="notification" isOpen={notification.isOpen}>{notification.text}</Alert>
    );
};

NotificationManager.propTypes = {
    notification: propTypes.shape({
        isOpen: propTypes.bool.isRequired,
        text: propTypes.string.isRequired
    })
};

export default NotificationManager;