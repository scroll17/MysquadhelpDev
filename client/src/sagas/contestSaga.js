import ACTION from "../actions/actiontsTypes";
import { createContest } from "../api/rest/restContoller";

import { put, call, select } from 'redux-saga/effects';
import history from "../boot/browserHistory";


export function* createContestSaga({contest}) {

    try {

        let {userReducers: { user }} = yield select();

        const contestSend = {
            type: contest.name || null,
            name: contest.type.value || null,
            typeOfVenture: contest.typeOfVenture.value || null,
            whatVentureDoes: contest.whatVentureDoes || null,
            targetCustomers: contest.targetCustomers || null,
            style: contest.style || null,
            description: contest.description || null,
            userId: user.id,
        };

        const { data } = yield createContest(contestSend);

        console.log(data);


        yield put({type: ACTION.STAGE_CONTEST, constest: ['select'], contestQueue:[]});
        yield put({type: ACTION.USERS_RESPONSE});


        yield call(history.push, '/');
    } catch (e) {
        yield put({type: ACTION.USERS_ERROR, error: e})
    }
}

export function* nextContestStageSaga() {
    try {
        let {userReducers: {contest: prevContest, contestQueue}} = yield select();

        const contest = prevContest.slice();
        const queue = contestQueue.slice();

        contest.push(queue.splice(1));

        yield put({type: ACTION.STAGE_CONTEST, constest: [...contest], contestQueue:[...queue] } );
    } catch (e) {
        yield put({type: ACTION.USERS_ERROR, error: e})
    }
}

export function* prevContestStageSaga() {
    try {
        let {userReducers: {contest: prevContest, contestQueue}} = yield select();
        const contest = prevContest.slice();
        const queue = contestQueue.slice();

        const newQueue = [contest.pop(), ...queue];

        yield put({type: ACTION.STAGE_CONTEST, constest: [...contest], contestQueue:[...newQueue]  } );
    } catch (e) {
        yield put({type: ACTION.USERS_ERROR, error: e})
    }
}


export function* toContestQueueSaga({stage}) {
    try {
        let {userReducers: {contest: prevContest}} = yield select();

        let contest = [...prevContest.slice(), stage.shift()];
        let newQueue = [...stage, "banks"];

        yield put({type: ACTION.STAGE_CONTEST, constest: [...contest] ,contestQueue: [...newQueue] } );

    } catch (e) {
        yield put({type: ACTION.USERS_ERROR, error: e})
    }
}
/*
export function* nextContestStageSaga({stage}) {
    try {
        let {userReducers: {contest: prevContest}} = yield select();
        const contest = [...prevContest];

        const contestIndex = contest.includes(stage[0]);
        if (!contestIndex){
            contest.push(stage[0]);
            yield put({type: ACTION.STAGE_CONTEST, stage: [...contest] } );
        }else{
            yield put({type: ACTION.STAGE_CONTEST});
        }
    } catch (e) {
        yield put({type: ACTION.USERS_ERROR, error: e})
    }
}*/
