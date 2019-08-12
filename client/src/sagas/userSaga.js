import ACTION from "../actions/actiontsTypes";
import {put, call, select} from 'redux-saga/effects';

import history from "../boot/browserHistory";

import {
    loginUser,
} from '../api/rest/restContoller';


export function* loginUserSaga({user}) {
    try {
        const {data} = yield loginUser(user);

        yield put({type: ACTION.USERS_RESPONSE, user: data.user});
        yield put({type: ACTION.SAVE_TOKENS_LOCALLY, tokens: data.tokenPair});

        yield call(history.push, '/');

    } catch (e) {
        yield put({type: ACTION.USERS_ERROR, error: e})
    }
}

