import axios from 'axios';
import ACTION from '../../actions/actiontsTypes';

import { refreshToken } from '../rest/restContoller'

import { STORE, TOKEN, ERROR } from '../../utils/consts';

const requestHandler = (config) => {
    STORE.dispatch({type: ACTION.USERS_REQUEST});

    const accessToken = localStorage.getItem(TOKEN.ACCESS_TOKEN);
    if(accessToken){
        config.headers.common[TOKEN.AUTHORIZATION] = TOKEN.BEARER + accessToken;
    }
    return config;
};

const errorHandler = async (error) => {
    try {
        switch (error.response.status) {
            case ERROR.Unauthorized:
                STORE.dispatch({type: ACTION.TOKENS_ERROR});
                return await Promise.reject(error);

            case ERROR.AuthenticationTimeout:
                localStorage.removeItem(TOKEN.ACCESS_TOKEN);
                const {data: {tokenPair,  user}} = await refreshToken();

                STORE.dispatch({type: ACTION.SAVE_TOKENS_LOCALLY, tokens: tokenPair });
                STORE.dispatch({type: ACTION.USERS_RESPONSE, user});

                return axios.request();
            default:
                return await Promise.reject(error);
        }
    } catch (err) {
        STORE.dispatch({type: ACTION.USERS_ERROR, error: err});
    }
    return await Promise.reject(error);
};



axios.interceptors.request.use(
    config => requestHandler(config),
    error => Promise.reject(error)
);


axios.interceptors.response.use(
    response => response,
    error => errorHandler(error)
);

export default axios;
