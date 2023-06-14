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
        case 'EDIT_TASK':
            console.log(action.payload, "edit") 
            return {
                ...state,
                taskItem: state.taskItem.map((task) => {
                        if(task === action.payload.task) {
                            task = action.payload.newTask
                        }
                        return task
                })

            }
    }
    return state
}