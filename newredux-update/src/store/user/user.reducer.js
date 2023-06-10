import { USER_ACTION_TYPES } from "./user.types"

const INITIAL_STATE = {

    currentUser: ''
}

export const userReducer = (state= INITIAL_STATE, action) => {
    const {type, payload} = action

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {...state, currentUser: payload}
        default: 
        // all the default should return the state
            return state
        
    }
   
}