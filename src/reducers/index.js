import { combineReducers } from 'redux'

const notification = (state = '', action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return action.text;
        case 'HIDE_NOTIFICATION':
            return '';
        default:
            return state;
    }
};

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
        case 'EDIT_BIRTH':
            return state.map( item => {
                return item.id !== action.data.id ? item : action.data
            });
        default:
            return state;
    }
};

export default combineReducers({
    notification,
    filter,
    search,
    data
});