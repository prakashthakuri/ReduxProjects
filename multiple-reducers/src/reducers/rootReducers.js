import {combineReducers} from 'redux'
import itemReducers from './itemReducers'
import userReducers from './userReducers'

 const rootReducer = combineReducers({
    userReducers : userReducers,
    itemReducers: itemReducers
})

export default rootReducer