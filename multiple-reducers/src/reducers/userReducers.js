const initialUserState = {
    users: [
        'Saul Goodman',
        'Jessi Pinkman',
        'Tuco',
        'Gus Firing',
        'Heisenberg'

    ]
}

export default function userReducers (state = initialUserState, action) {

    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'ADD_USER' : 
        return {
            ...state,
            users: [...state.users, 'new user']
        }
    }
    return state
}