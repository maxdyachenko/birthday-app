import React, {Component} from 'react';
import {connect} from 'react-redux'
import Search from '../../components/Search/Search'
import { setSearchQuery } from '../../actions'


const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (query) => {
            dispatch(setSearchQuery(query));
        }
    }
};

const SearchContainer = connect(undefined, mapDispatchToProps)(Search);

export default SearchContainer;
