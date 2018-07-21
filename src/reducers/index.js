import { combineReducers } from 'redux'
import filter from './filter'
import notification from './notification'
import search from './search'
import data from './data'
import authUser from './authUser'

export default combineReducers({
    authUser,
    notification,
    filter,
    search,
    data
});