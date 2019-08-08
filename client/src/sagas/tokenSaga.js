import ACTION from "../actions/actiontsTypes";
import { call, put } from 'redux-saga/effects';
import history from '../boot/browserHistory';

import { setAuthRequest } from '../api/axios/config';

export function* saveTokenSaga({tokens}) {
    if(tokens.accessToken.length > 0){
        localStorage.setItem("accessToken", tokens.accessToken);
        localStorage.setItem("refreshToken", tokens.refreshToken);
    }
    yield call( setAuthRequest , tokens.accessToken);
}

export function* tokenErrorSaga() {
    yield put({type: ACTION.USER_LOGOUT});
    yield call(history.push, "/login");
}
