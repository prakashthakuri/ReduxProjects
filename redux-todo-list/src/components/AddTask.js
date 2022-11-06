import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

export default function AddTask() {
    const [taskName, setTaskName] = useState('')
    const dispatch = useDispatch()
    const taskObj = useSelector(state => state)

    const addTaskFunction =() => {
        dispatch({type: 'ADD_TASK', payload: taskName})

    }
  return (
    <div className='row'>
        <h1> Add Task</h1>
        <div className='col-md-6'>

            <input 
                type="text"
                value={taskName}
                onChange= {(e)=> {setTaskName(e.target.value)}}
            />

            <button
                className='btn btn-success'
                onClick={addTaskFunction}>
                    Add Task
            </button>

        </div>
       
    </div>
  )
}
