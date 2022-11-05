import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

export default function LanguageAuthor() {

    const [languageName, setLanguageName] = useState('')

    const dispatch = useDispatch()

    const changeLanguage = () => {

        // Dispatch takes action type and payload, type is what we define and payload is the new object we want update
        dispatch({type: 'CHANGE_NAME', payload: languageName})
    } 

    return (
        <>
        <h1> Most Common Framework is:</h1>
        <input 
        type="text"
        placeholder= "new language"
        value= {languageName}
        onChange = {(e) => {setLanguageName(e.target.value)}}
/>

        <button 
        onClick={changeLanguage}
        >
            Change Language
        </button>
        </>
    )
}