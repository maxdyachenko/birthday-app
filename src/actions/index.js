import {push} from 'connected-react-router'
import * as routes from '../constants/routes'
import {auth} from '../firebase/firebase'

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

export const editBirth = (data) => ({
    type: 'EDIT_BIRTH',
    data
});

export const showNotification = (text) => ({
    type: 'SHOW_NOTIFICATION',
    isOpen: true,
    text
});

export const hideNotification = () => ({
    type: 'HIDE_NOTIFICATION',
    isOpen: false,
});

export const addBirthAndRoute = (data) => {
    return function (dispatch) {
        dispatch(addBirth(data));
        dispatch(push(routes.MAIN));
        dispatch(showNotification('Successfully added'));
        setTimeout(() => {
            dispatch(hideNotification());
        }, 3000)
    };
};

export const editBirthAndRoute = (data) => {
    return function (dispatch) {
        dispatch(editBirth(data));
        dispatch(push(routes.MAIN));
        dispatch(showNotification('Successfully changed'));
        setTimeout(() => {
            dispatch(hideNotification());
        }, 3000)
    };
};

export const setAuthUser = (user) => ({
    type: 'ADD_AUTH_USER',
    user
});

export const signOut = () => ({
    type: 'USER_SIGN_OUT'
});

export const startListeningToAuthChange = () => {
    return (dispatch) => {
        auth.onAuthStateChanged( authUser => {
            if (authUser) {
                dispatch(setAuthUser(authUser));
            }
            else {
                dispatch(signOut());
            }
        })
    }
};