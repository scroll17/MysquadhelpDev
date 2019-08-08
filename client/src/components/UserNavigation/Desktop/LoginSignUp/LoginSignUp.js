import React , { useState } from 'react';
import {Link} from "react-router-dom";

import style from './LoginSignUp.module.sass';

function LoginSignUp(props){
    return (
        <div className={style.loginSignUp}>
            <div className={style.row}>
                <span>
                    <Link to={"/login"}>Login</Link>
                </span>
                <span>
                    <Link to={"/signup"}>Sign Up</Link>
                </span>
            </div>
        </div>
    )
}

export default LoginSignUp;
