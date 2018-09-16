import {connect} from 'react-redux';
import NotificationManager from '../../components/NotificationManager/NotificationManager';
import {getNotification} from '../../selectors';

const mapStateToProps = state => ({
  notification: getNotification(state),
});

export default connect(mapStateToProps)(NotificationManager);
