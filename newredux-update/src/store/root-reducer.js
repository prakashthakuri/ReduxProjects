import {combineReducers} from 'redux'
import { userReducer } from './user/user.reducer'


export const rootReducer = combineReducers({
// combining all the reducers here
user: userReducer
})