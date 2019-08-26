import React from 'react';
import connect from "react-redux/es/connect/connect";
import { Field, reduxForm, formValueSelector, getFormMeta } from 'redux-form';

import style from './BankForm.module.sass'

import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';

import { CONTEST } from '../../../utils/consts'

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
} from "./CardUtils/CardUtils";


let BankForm = (props) => {
    const {handleSubmit, fields, number, name, expiry, cvc } = props;

    const focused = (fields) => {
        let focusOnField;
        Object.keys(fields).forEach( field => {
            if(fields[field].active){
                focusOnField = field;
            }
        });
        return focusOnField;
    };

    return (
        <div className={style.container}>

            <div className={style.orderSummary}>
                <span className={style.order}>Order Summary</span>
                <div className={style.orderTotal}>
                    <span className={style.total}>Total:</span>
                    <span className={style.price}>$448.00 USD</span>
                </div>
            </div>

            <div className={style.paymentForm}>
                <Cards
                    number={number || ''}
                    name={name || ''}
                    expiry={expiry || ''}
                    cvc={cvc || ''}
                    focused={focused(fields)}
                />

                <form onSubmit={handleSubmit}>
                    <Field name="number"
                           component="input"
                           type="text"
                           placeholder="Card Number"
                           format={formatCreditCardNumber}
                    />


                    <Field name="name"
                           component="input"
                           type="text"
                           placeholder="Name"
                    />


                    <div className={style.expiryAndCvc}>
                        <Field name="expiry"
                               component="input"
                               type="text"
                               placeholder="Valid Thru"
                               format={formatExpirationDate}
                        />
                        <Field name="cvc"
                               component="input"
                               type="text"
                               placeholder="CVC"
                               format={formatCVC}
                        />
                    </div>

                </form>
            </div>
        </div>
    );

};

BankForm = reduxForm({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(BankForm);

const selector = formValueSelector(CONTEST.BANKS); // <-- same as form name
const mapStateToProps = state => {
    const fields = getFormMeta(CONTEST.BANKS)(state);
    const {number, name, expiry, cvc} = selector(state, 'number','name','expiry','cvc');
    return {
        fields,
        number, name, expiry, cvc
    }
};
export default connect(mapStateToProps)(BankForm);
