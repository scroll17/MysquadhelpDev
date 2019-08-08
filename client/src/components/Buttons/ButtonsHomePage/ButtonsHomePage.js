import React  from 'react';
import style from './ButtonsHomePage.module.sass';

import { Link } from "react-router-dom";


function ButtonsHomePage(props){
    return (
        <div className={style.startContest}>
            <Link to={props.link}>{props.children}</Link>
        </div>
    )
}

export default ButtonsHomePage;
