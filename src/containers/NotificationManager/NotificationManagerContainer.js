import React from 'react'
import NotificationManager from '../../components/NotificationManager/NotificationManager'
import {connect} from 'react-redux'
import {getNotification} from '../../selectors'

const mapStateToProps = (state) => {
    return {
        notification: getNotification(state)
    }
};

export default connect(mapStateToProps)(NotificationManager);
