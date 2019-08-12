import axios from '../axios/config';
import { restURL, url } from '../baseURL';

export const loginUser = ( user ) => axios.post(`${restURL}${url.login}`,  user );
