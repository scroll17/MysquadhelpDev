import React from 'react';
import { Provider } from 'react-redux';
import config from './config';
import App from '../App';

import { toast } from 'react-toastify';

toast.configure({
    autoClose: 2000,
    closeOnClick: true
});

const STORE = config();

function Store(){
  return (
      <Provider store={ STORE }>
        <App />
      </Provider>
  );
}

export const store = STORE;
export default Store;
