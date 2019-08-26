import React from 'react';
import {Link} from "react-router-dom";

import style from './NotFoundPage.module.sass';

import { ERROR } from '../../utils/consts'

function NotFoundPages() {
    return (
        <div className={style.notFoundPages}>
            <div className={style.nameError}>{ERROR.NotFound}</div>
            <div className={style.errorMassage}>Not Found !</div>
            <Link to={'/'}>
                <div className={style.logo} />
            </Link>
        </div>
    );
}
export default NotFoundPages;
