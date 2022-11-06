import React from 'react'
import {useSelector} from 'react-redux'
export default function Navbar() {
    const taskObj= useSelector(state => state)
  return (
    <div>
        <h1> Redux Todo list. Total Remaining Task: {taskObj.taskItem.length} </h1>

    </div>
  )
}
