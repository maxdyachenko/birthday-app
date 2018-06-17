import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getDatesWithFilter, getBirthDates, getDaysToBirthday} from '../../selectors'

import TableGrid from '../../components/Table/TableGrid'

const mapStateToProps = (state) => {
    return {
        dates: getDatesWithFilter(state),
        birthDates: getBirthDates(state),
        daysToBirthday: getDaysToBirthday(state)
    };
};

const TableGridContainer = connect(mapStateToProps)(TableGrid);

export default TableGridContainer;
