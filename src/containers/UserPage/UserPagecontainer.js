import {connect} from 'react-redux';
import UserPage from '../../components/UserPage/UserPage';
import {getSavedStateByUrlId} from '../../selectors';

const mapStateToProps = state => ({
  userData: getSavedStateByUrlId(state),
});

const UserPageContainer = connect(mapStateToProps)(UserPage);

export default UserPageContainer;
