import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'

// you need a rootReducer to generate a the store
// logger allows us to see what store looks like before it dispatches

const middleWares = [logger]

const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composeEnhancers)