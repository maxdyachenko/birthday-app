import { combineReducers } from 'redux'

const filter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const view = (state = [], action) => {
    return state;
};

const dates = (state = '', action) => {
    return state;
};

export default combineReducers({
    filter,
    view,
    dates
});