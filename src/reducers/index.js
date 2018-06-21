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

const data = (state = [], action) => {
    switch (action.type) {
        case 'DELETE_ROW':
            return state.filter( item => {
                return item.id !== action.id
            });
        case 'ADD_BIRTH':
            return [
                ...state,
                action.data
            ];
        default:
            return state;
    }
};

export default combineReducers({
    filter,
    search,
    data
});