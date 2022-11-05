
// This is the store
const initialData = {
    languageName : 'JavaScript',
    languagePopularFramework: 'React'
}

// store is defined as a state in reducer function

// reducers has two parameter 1. state and 2. action (props: actionName and payload), actionName: action.type
export default function LanguageReducers(state = initialData, action) {
    
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'CHANGE_NAME' : return { 
            ...state,
            languageName: action.payload.languageName, // if the payload is object you need to assign the objectName too
            languagePopularFramework: action.payload.languagePopularFramework
        }
    }

    return state
}