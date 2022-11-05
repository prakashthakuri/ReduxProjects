
// This is the store
const initialData = {
    languageName : 'JavaScript'
}

// store is defined as a state in reducer function
export default function LanguageReducers(state = initialData, action) {
    
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'CHANGE_NAME' : return { 
            languageName: action.payload}
    }

    return state
}