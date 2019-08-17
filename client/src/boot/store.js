import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';

import { STORE } from '../utils/consts';

import { toast } from 'react-toastify';

toast.configure({
    autoClose: 2000,
    closeOnClick: true
});

function Store(){
  return (
      <Provider store={ STORE }>
        <App />
      </Provider>
  );
}

export default Store;
