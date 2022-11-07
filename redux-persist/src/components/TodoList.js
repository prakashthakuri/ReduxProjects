import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem'

export default function TodoList() {
    const taskObj = useSelector(store => store.taskReducer)
    console.log(taskObj)
    const taskItems = taskObj.taskItem.map((task) => {

        return (<TodoItem  task={task}/>)
    })

  return (
    <div className='row justify-content-center mt-5'>
        {taskItems}

    </div>
  )
}
