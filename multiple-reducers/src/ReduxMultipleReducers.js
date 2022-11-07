import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function ReduxMultipleReducers() {

    const itemsObj = useSelector(store => store.itemReducers)
    const userObj = useSelector(store => store.userReducers)
    console.log(itemsObj, userObj)
    const dispatch = useDispatch()

    const callReducer = () => {
        dispatch({type: 'ADD_USER'} )
        console.log(userObj)
        

    }

  return (
    <div>ReduxMultipleReducers

<button
    onClick={callReducer}
    >Click</button>
  
    </div>
  ) 
}
