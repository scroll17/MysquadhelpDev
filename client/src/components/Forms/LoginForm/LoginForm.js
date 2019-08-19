import React, { useState, useEffect } from 'react';
import style from './LoginForm.module.sass';

import { Field, reduxForm } from 'redux-form';
import connect from "react-redux/es/connect/connect";

import { toast } from 'react-toastify';

import { ERROR } from "../../../utils/consts";

import { getUserResponse } from "../../../actions/actionCreator";


let LoginForm = (props) => {

    const [notFoundError, setNotFoundError] = useState(false);

    useEffect(() => {
        if(props.err){
            const response = props.err.response;

            if(response.status === ERROR.NotFound) setNotFoundError(true);
            if(response.status === ERROR.Forbidden) {
                toast.error(response.statusText, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }
        return () => {
            props.getUserResponse(); // обнулить все ошибки в сторе
        };
    });

    const renderField = ({input, placeholder, type, meta: { touched, error },}) => {
        const borderError = error ? {border: '2px solid #f00'} : null;
        return(
                <>
                    <input {...input}
                           type={type}
                           placeholder={placeholder}
                           className={style.inputNormal}
                           style={borderError}
                    />
                    {touched && error && <div className={style.errorContainer}>{error}</div>}
                </>
        )};

        const { handleSubmit, submitting} = props;

        return (
            <div className={style.loginForm}>
                <div className={style.logToYourAc}>
                    <h2>LOGIN TO YOUR ACCOUNT</h2>
                </div>

                { notFoundError ?
                    <div className={style.serverError}>
                        Invalid Email or Password.
                    </div>
                    :
                    null
                }

                <form onSubmit={ handleSubmit } className={style.form}>
                    <div className={style.email}>
                        <Field name="email"
                               component={renderField}
                               type="email"
                               placeholder="Email address"
                               className={style.inputNormal}
                        />
                    </div>
                    <div className={style.email}>
                        <Field name="password"
                               component={renderField}
                               type="password"
                               placeholder="Password"
                               className={style.inputNormal}
                        />
                    </div>
                    <div className={style.button}>
                        <button type="submit" disabled={submitting}>login</button>
                    </div>
                </form>
            </div>

        );

};

LoginForm = reduxForm ({
    form: 'login',
})(LoginForm);

const mapStateToProps = (state) => ({
    err: state.userReducers.error
});
const mapDispatchToProps = dispatch => ({
    getUserResponse: () => dispatch(getUserResponse())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
