import React , { useState } from 'react';
import style from './ListItem.module.sass';

import { Link } from "react-router-dom";

import DropDownList from './DropDownList/DropDownList'

function ListItem(props){
        const [name, ...item] = props.children;
        const [drop, setDrop] = useState(false);

        return (
            <div className={style.blockForList} onMouseOver={() => setDrop(true)} onMouseOut={() => setDrop(false)}>
                <li className={style.item}  >
                    <Link to={"/Name-Ideas"} >
                        {name}
                        <i className="fa fa-angle-down" />
                    </Link>
                </li>
                { <DropDownList elements={item} visible={drop}/>}
            </div>
        )
}

export default ListItem;

