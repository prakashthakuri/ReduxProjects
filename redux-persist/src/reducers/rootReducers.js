import {combineReducers} from 'redux'
import taskReducer from './taskReducers'
 
const rootReducer = combineReducers({

    taskReducer : taskReducer,
})

export default rootReducer