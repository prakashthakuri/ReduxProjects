const initialState = {

    taskItem : []
}

export default function taskReducer (state = initialState, action) {

    // eslint-disable-next-line default-case
    switch(action.type)
    {
        case 'ADD_TASK' :
            return {
                ...state,
                taskItem: [...state.taskItem, action.payload]
            }
        case 'DELETE_TASK' : 
            return {
                ...state,
                taskItem : state.taskItem.filter((task) => task!==action.payload)
            }
    }
    return state
}