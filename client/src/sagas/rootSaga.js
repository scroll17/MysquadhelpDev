import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';

import {
    loginUserSaga,
} from './userSaga';

import { saveTokenSaga, tokenErrorSaga } from './tokenSaga'

function* rootSaga() {
    yield takeLatest(ACTION.LOGIN_USER, loginUserSaga);

    yield takeLatest(ACTION.SAVE_TOKENS_LOCALLY, saveTokenSaga);
}

export default rootSaga;
