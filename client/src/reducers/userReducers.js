import ACTION from '../actions/actiontsTypes';

const initialState = {
  isFetching: "null",
  error: null,
  user: null,
  users: [],
  contest: ['select'],
  contestQueue:[],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.STAGE_CONTEST: {
      return {
        ...state,
        contest: action.constest,
        contestQueue: action.contestQueue,
        error: null
      }
    }
    case ACTION.USERS_REQUEST: {
      return {
        ...state,
        isFetching: "requested",
        error: null
      }
    }
    case ACTION.USERS_RESPONSE: {
      return {
        ...state,
        ...action,
        isFetching: "answered",
        error: null
      }
    }
    case ACTION.USERS_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
        users: []
      }
    }
    default: {
      return state;
    }
  }
}


