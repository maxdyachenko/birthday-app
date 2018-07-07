import {connect} from 'react-redux'
import { rowDelete } from '../../actions'
import {getStructuredData, getBirthDates} from '../../selectors'
import TableGrid from '../../components/Table/TableGrid'

const mapStateToProps = (state) => {
    return {
        birthData: getBirthDates(state),
        data: getStructuredData(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRowDelete: (dateId) => {
            dispatch(rowDelete(dateId));
        }
    }
};

const TableGridContainer = connect(mapStateToProps, mapDispatchToProps)(TableGrid);

export default TableGridContainer;
