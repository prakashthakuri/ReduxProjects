import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import { persistReducer,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// you need a rootReducer to generate a the store
// logger allows us to see what store looks like before it dispatches

const persistConfig = {
    key: 'root',
    storage,
    blackList: []
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean) 
// filter.Boolean filters out the boolean value into an empty object rather than rendering false


// this code implies that if the project is not in production and there is redux devtools extension you can use that 
//  else if the project is not in production just use the regular compose.
//  this is necessary because you dont want regular user to see your redux flow

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose


const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composeEnhancers)

export const persistor = persistStore(store)