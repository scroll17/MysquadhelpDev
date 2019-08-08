import React from 'react';
import style from './NotFoundPage.module.sass';
import {Link} from "react-router-dom";


function NotFoundPages() {
    return (
        <div className={style.notFoundPages}>
            <div className={style.nameError}>404</div>
            <div className={style.errorMassage}>Not Found !</div>
            <Link to={'/'}>
                <div className={style.logo} />
            </Link>
        </div>
    );
}
export default NotFoundPages;
