import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

import style from "./SignUpPage.module.sass";

import HeaderLoginAndSignUp from "../../components/HeaderLoginAndSignUp/HeaderLoginAndSignUp";
import SignUpForm from "../../components/Forms/SignupForm/SignupForm";

import { createUser } from "../../actions/actionCreator";


class SignUpPage extends Component{
    onSignUpSubmit = values => {
        const dataSend = {
            firstName:values.firstName,
            lastName:values.lastName,
            displayName:values.displayName,
            email: values.email,
            role: values.role,
            password: values.password,
        };
        this.props.onSignUpSubmit(dataSend)
    };

    render(){
        return (
            <main className={style.userSignUpFlow}>
                <div className={style.container}>
                    <HeaderLoginAndSignUp>Login</HeaderLoginAndSignUp>
                    <SignUpForm onSubmit={this.onSignUpSubmit}/>
                </div>
            </main>
        );
    }
}


const mapStateToProps = (state) => ({
    user: state.userReducers.user
});

const mapDispatchToProps = dispatch => ({
    onSignUpSubmit: user => dispatch(createUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
