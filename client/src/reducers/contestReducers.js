import ACTION from '../actions/actiontsTypes';

const restoreValues = (item) => {
    return JSON.parse(sessionStorage.getItem(item))
};

const initialState = {
    contestNow: restoreValues('contestNow') || ['select'],
    contestQueue: restoreValues('contestQueue') || [],
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.STAGE_CONTEST: {
            return {
                ...state,
                contestNow: action.contestNow,
                contestQueue: action.contestQueue,
                error: null
            }
        }
        default: {
            return state;
        }
    }
}


