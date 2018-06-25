import {push} from 'connected-react-router'
export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter
});

export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    query
});

export const rowDelete = (id) => ({
    type: 'DELETE_ROW',
    id
});

export const addBirth = (data) => ({
    type: 'ADD_BIRTH',
    data
});

export const showNotification = (text) => ({
    type: 'SHOW_NOTIFICATION',
    text
});

export const hideNotification = () => ({
    type: 'HIDE_NOTIFICATION',
});

export const addBirthAndRoute = (data) => {
    return function (dispatch) {
        dispatch(addBirth(data));
        dispatch(push('/'));
        dispatch(showNotification('Successfully added'));
        setTimeout(() => {
            dispatch(hideNotification());
        }, 3000)
    };
};


// import { push } from 'connected-react-router'
//
// export const login = (username, password) => (dispatch) => {
//
//     /* do something before redirection */
//
//     dispatch(push('/home'))
// }