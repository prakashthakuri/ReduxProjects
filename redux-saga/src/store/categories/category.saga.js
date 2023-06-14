// generate side effects

import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchCategoriesFailure, fetchCategoriesSuccess } from "./catergory.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';



export function* fetchCategoryAsync(){

    try {
        const categoriesArray = yield getCategoriesAndDocuments('categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
      } catch (error) {
        yield put(fetchCategoriesFailure(error));
      }

}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoryAsync ) // takes all the actions but takeLatest takes the latest action when there are multiple actions going back to back
}


export function* categoriesSaga() {
    yield all([call(onFetchCategories)])

}