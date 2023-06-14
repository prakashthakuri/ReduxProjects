import React from 'react'
import { useSelector } from 'react-redux'
import CategoryPreview from './CategoryPreview'
import { selectCurrentUser } from './store/user/user.selector'


 export const NewComponent = () => {

  const currentUser =   useSelector(selectCurrentUser)
  console.log(currentUser)
  return (
    <div>{currentUser}
    <CategoryPreview
             />
    </div>
  )
}
