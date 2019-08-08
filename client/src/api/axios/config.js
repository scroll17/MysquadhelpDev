import axios from 'axios';
import ACTION from '../../actions/actiontsTypes';
import {restURL} from '../baseURL';
import { store } from '../../boot/store';

import history from "../../boot/browserHistory";

axios.interceptors.request.use(  config => {
    store.dispatch({type: ACTION.USERS_REQUEST});

    config.headers.common['Authorization'] = "Bearer " + localStorage.getItem("accessToken");
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response => response,
    async (error) => {
        const { response: {config} } = error;

        try {
            switch (error.response.status) {
                case 401:
                    localStorage.clear();
                    history.push('/login');
                    return Promise.reject(error);
                case 419:
                    //console.clear(); //TODO console._commandLineAPI.clear();

                    const {data: {tokenPair,  user}} = await axios.post(`${restURL}/refresh`, {refreshToken: localStorage.getItem("refreshToken")});
                    const tokens = tokenPair;

                    store.dispatch({type: ACTION.TOKENS_ACTION_WITH_LOCAL, tokens });
                    store.dispatch({type: ACTION.USERS_RESPONSE, user});
                    return  Promise.reject(error);
                default:
                    console.log('default axios:',error.response.status);
                    return  Promise.reject(error);
            }
        } catch (err) {
            store.dispatch({type: ACTION.TOKENS_ERROR, error: err});
        }

        return axios.request(config);
    }
);

export const setAuthRequest = (accessToken) => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken;
};
export const getAuthRequest = () => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("accessToken");
};
export default axios;
