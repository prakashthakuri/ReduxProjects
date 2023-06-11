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

const middleWares = [logger]

const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composeEnhancers)

export const persistor = persistStore(store)