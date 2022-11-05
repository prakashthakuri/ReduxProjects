import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function LanguageAuthor() {


    const [languageName, setLanguageName] = useState('')

    const languageObj = useSelector(state => state)
    const dispatch = useDispatch()

    const changeLanguage = () => {
        // changing payload to object.
        const newPayload = {
            languageName: languageName,
            languagePopularFramework: languageName === 'Java' ? 'Sprint Boot' : 'React'
        }

        // Dispatch takes action type and payload, type is what we define and payload is the new object we want update
        dispatch({type: 'CHANGE_NAME', payload: newPayload})
    } 

    return (
        <>
        <h1> Most Common Framework is: {languageObj.languagePopularFramework}</h1>
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