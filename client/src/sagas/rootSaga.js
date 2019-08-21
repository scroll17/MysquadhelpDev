import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';

import {
    loginUserSaga,
    createUserSaga,
    userLogoutSaga,
    getUserSaga,
    getAllUserSaga,
    banUserByIdSaga,
} from './userSaga';

import { saveTokenSaga, tokenErrorSaga } from './tokenSaga'

import {
    createContestSaga,
    nextContestStageSaga,
    prevContestStageSaga,
    toContestQueueSaga,
} from './contestSaga'

function* rootSaga() {
    yield takeLatest(ACTION.LOGIN_USER, loginUserSaga);
    yield takeLatest(ACTION.CREATE_USER, createUserSaga);
    yield takeLatest(ACTION.USER_LOGOUT, userLogoutSaga);
    yield takeLatest(ACTION.GET_USER, getUserSaga);

    yield takeLatest(ACTION.GET_ALL_USER, getAllUserSaga);
    yield takeLatest(ACTION.BAN_USER_BY_ID, banUserByIdSaga);

    yield takeLatest(ACTION.SAVE_TOKENS_LOCALLY, saveTokenSaga);
    yield takeLatest(ACTION.TOKENS_ERROR, tokenErrorSaga);

    yield takeLatest(ACTION.CREATE_CONTEST_ACTION, createContestSaga);
    yield takeLatest(ACTION.PREV_STAGE_CONTEST, prevContestStageSaga);
    yield takeLatest(ACTION.NEXT_STAGE_CONTEST, nextContestStageSaga);
    yield takeLatest(ACTION.ADD_TO_CONTEST_QUEUE, toContestQueueSaga);
}

export default rootSaga;
