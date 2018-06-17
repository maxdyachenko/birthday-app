import { connect } from 'react-redux'
import { getActiveFilter } from '../../selectors'
import ButtonLink from '../../components/Filters/ButtonLink'
import { setFilter } from '../../actions'


const mapStateToProps = (state, ownProps) => {
    return {
        active: getActiveFilter(state, ownProps.filter)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter))
    }
});

const FilterLinkContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonLink);

export default FilterLinkContainer;
