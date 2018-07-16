import { combineReducers } from 'redux'
import filter from './filter'
import notification from './notification'
import search from './search'
import data from './data'

export default combineReducers({
    notification,
    filter,
    search,
    data
});