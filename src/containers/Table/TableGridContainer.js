import {connect} from 'react-redux'
import {getDatesWithSearchAndFilter, getBirthDates, getDaysToBirthday} from '../../selectors'

import TableGrid from '../../components/Table/TableGrid'

const mapStateToProps = (state) => {
    return {
        dates: getDatesWithSearchAndFilter(state),
        birthDates: getBirthDates(state),
        daysToBirthday: getDaysToBirthday(state)
    };
};

const TableGridContainer = connect(mapStateToProps)(TableGrid);

export default TableGridContainer;
