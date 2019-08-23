import ACTION from "../actions/actiontsTypes";
import { createContest } from "../api/rest/restContoller";

import { put, call, select } from 'redux-saga/effects';
import history from "../boot/browserHistory";

import { first, last, size } from 'lodash';

import {reset} from 'redux-form';

import { CONTEST, FIELDS_TO_SEND } from "../utils/consts";

import * as _ from 'lodash';

export function* createContestSaga({formData}) {
    try {
        yield put({type: ACTION.WRITE_FORM_DATA_TO_STORE, formData});

        let { contestReducers: { contestNow } } = yield select();


/*        let contestSend;
        _.keys(newContestFormData).forEach( form => {
            console.log(form);
            FIELDS_TO_SEND.forEach( field => {
                contestSend[form] = newContestFormData[form] || null;
            });

            console.log('contestSend form', contestSend[form]);
        });*/


       /* const contestForms = _.keys(newContestFormData);

        let contestSend;
        contestForms.forEach( form => {
            const  formFields = _.keys(form);
            const  formFieldValues = _.values(newContestFormData[form]);

            formFields.forEach( (field, id) => {
                contestSend[form][field] = formFieldValues[id]
            });
        });

        console.log(contestSend);*/


/*        const contestSend = {
            type: contest.name || null,
            name: contest.type.value || null,
            typeOfVenture: contest.typeOfVenture.value || null,
            whatVentureDoes: contest.whatVentureDoes || null,
            targetCustomers: contest.targetCustomers || null,
            style: contest.style || null,
            description: contest.description || null,
            userId: user.id,
        };

        const { data } = yield createContest(contestSend);*/

        for (let formIndex = 1; formIndex < contestNow.length; formIndex++) {
            yield put(reset(contestNow[formIndex]))
        }
        sessionStorage.clear();

        yield put({type: ACTION.STAGE_CONTEST, contestNow: [CONTEST.SELECT], contestQueue:[]});
        yield put({type: ACTION.WRITE_CONTEST_FORM_DATA, contestFormData: {}});

        yield put({type: ACTION.USERS_RESPONSE});

        yield call(history.push, '/');
    } catch (e) {
        yield put({type: ACTION.USERS_ERROR, error: e})
    }
}

export function* nextContestStageSaga({formData}) {


    try {
        let {contestReducers: {contestNow, contestQueue }} = yield select();

        yield put({type: ACTION.WRITE_FORM_DATA_TO_STORE, formData});

        const contest = _.clone(contestNow);
        const queue = _.clone(contestQueue);
        contest.push(queue.shift());

        yield put({type: ACTION.STAGE_CONTEST, contestNow: [...contest], contestQueue:[...queue] } );
    } catch (e) {
        yield put({type: ACTION.USERS_ERROR, error: e})
    }
}

export function* prevContestStageSaga() {
    try {
        let {contestReducers: {contestNow: prevContest, contestQueue}} = yield select();
        const contest = _.clone(prevContest);
        const queue = _.clone(contestQueue);

        const newContest = [..._.initial(contest)];
        const newQueue = [..._.takeRight(contest, 1), ...queue];

        yield put({type: ACTION.STAGE_CONTEST, contestNow: [...newContest], contestQueue:[...newQueue]  } );
    } catch (e) {
        yield put({type: ACTION.USERS_ERROR, error: e})
    }
}


export function* toContestQueueSaga({stage}) {
    try {
        let {contestReducers: {contestNow: prevContest}} = yield select();

        let contest = [..._.clone(prevContest), _.first(stage)];

        let newQueue;
        if(size(stage) > 1){
            newQueue = [..._.tail(stage), CONTEST.BANKS]
        }else{
            newQueue = [CONTEST.BANKS];
        }

        yield put({type: ACTION.STAGE_CONTEST, contestNow: [...contest] ,contestQueue: [...newQueue] } );

    } catch (e) {
        yield put({type: ACTION.USERS_ERROR, error: e})
    }
}

export function* writeFormDataToStore({formData}) {
    try {
        let {contestReducers: {contestNow, contestFormData}} = yield select();

        if(formData){
            const newContestFormData = _.cloneDeep(contestFormData);
            newContestFormData[last(contestNow)] = _.clone(formData);
            yield put({type: ACTION.WRITE_CONTEST_FORM_DATA, contestFormData: newContestFormData } );
        }
    } catch (e) {
        yield put({type: ACTION.USERS_ERROR, error: e})
    }
}