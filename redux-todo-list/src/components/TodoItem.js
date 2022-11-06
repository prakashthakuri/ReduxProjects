import React , {useState}from 'react'
import {useDispatch} from 'react-redux'
export default function TodoItem({task}) {

    const [showEdit, setShowEdit] = useState(false)
    const [newTask, setNewTask] = useState('')

    const dispatch = useDispatch()

    const deleteTask =(task) => {
        console.log(task)
        // dispatch takes action and payload
        dispatch( {type: 'DELETE_TASK', payload: task})


    }

    const finalEdit =(task) => {
        dispatch({type: 'EDIT_TASK', payload: {task, newTask}})
        setShowEdit(false)
        
    }
  return (
    <div>
        <div className='row justify-content-center'>
            <h1>{task}</h1>
            <button className='btn btn-secondary' 
                    onClick={() => {setShowEdit(!showEdit)
                    }}>
                    Edit</button>
            <button
            className='btn btn-danger'
            onClick={() => deleteTask(task)}> Delete</button>
            
            {showEdit && (
            <>
              <input
                type="text"
                value={newTask}
                onChange={(e) =>setNewTask(e.target.value)}

                />

            <button className='btn btn-success' 
                    onClick={() => finalEdit(task)}>EDIT</button>
            </>

            )}

          
        </div>
        
    </div>
  )
}
