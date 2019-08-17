import React  from 'react';
import style from './DropDownList.module.sass';

import { Link } from "react-router-dom";


function DropDownList(props){
    const visibleBlock = props.displayStyle ? {display: "block"} : {display: "none"};
        return (
            <ul className={style.dropMenu} style={visibleBlock}>
                {props.elements.map( item => {
                    const { children, id} = item.props;
                    const key = children === undefined ? id : children;
                    if(item.type === "hr") return <hr key={key}/>;
                    return (
                        <Link to={"/"} key={key}>
                            <li>{item}</li>
                        </Link>
                    )
                })}
            </ul>
        )
}

export default DropDownList;
