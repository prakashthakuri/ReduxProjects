import React from 'react'
import {useDispatch} from 'react-redux'
export default function TodoItem({task}) {

    const dispatch = useDispatch()

    const deleteTask =(task) => {
        console.log(task)
        // dispatch takes action and payload
        dispatch( {type: 'DELETE_TASK', payload: task})


    }
  return (
    <div>
        <div className='row justify-content-center'>
            <h1>{task}</h1>
            <button className='btn btn-secondary'>Edit</button>
            <button
            className='btn btn-danger'
            onClick={() => deleteTask(task)}> Delete</button>
            
        </div>
        
    </div>
  )
}
