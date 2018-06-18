import { combineReducers } from 'redux'

const filter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const search = (state = '', action) => {
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return action.query;
        default:
            return state;
    }
};

const data = (state = {}, action) => {

            return state;

};

export default combineReducers({
    filter,
    search,
    data
});