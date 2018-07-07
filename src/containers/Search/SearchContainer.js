import React, {Component} from 'react'
import {connect} from 'react-redux'
import Search from '../../components/Search/Search'
import { setSearchQuery } from '../../actions'
import propTypes from 'prop-types'

class SearchContainer extends Component {
    handleOnChange = (e) => {
        this.props.onSearch(e.target.value);
    };

    render() {
        return (
            <Search onChange={this.handleOnChange} />
        )
    }
}

SearchContainer.propTypes = {
    onSearch: propTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (query) => {
            dispatch(setSearchQuery(query));
        }
    }
};

export default SearchContainer = connect(undefined, mapDispatchToProps)(SearchContainer);
