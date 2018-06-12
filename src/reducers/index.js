import { combineReducers } from 'redux'

const filter = (state = {}, action) => {
    return state;
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