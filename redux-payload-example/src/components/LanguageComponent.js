import React from 'react'
import { useSelector } from 'react-redux'


export default function LanguageComponent() {

    const languageObj = useSelector ( state => state)

    return (

        <>
        <h1> The given name in Language Reducer is: {languageObj.languageName}</h1>
        </>
    )
}