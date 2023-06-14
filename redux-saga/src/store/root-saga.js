import {all, call} from 'redux-saga/effects'; //--effects  -->side effects
import { categoriesSaga } from './categories/category.saga';

// function* is ES6 generative function 
export function* rootSaga() {
    yield all([call(categoriesSaga)])

}
