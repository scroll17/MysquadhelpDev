import React , { useState } from 'react';
import style from './ListItem.module.sass';

import { Link } from "react-router-dom";
import { isEqual } from 'lodash';

function ListItem(props){
    const {header, item} = props.list;
    const [drop, setDrop] = useState("none");

    const DropDownList = (items) => {
        return (
            <ul className={style.dropMenu} style={{display: drop}}>
                {items.map( (item, id) => {
                    if(isEqual(item.tag, "hr")) return <hr key={id}/>;
                    return (
                        <Link to={"/"} key={item}>
                            <li>{item}</li>
                        </Link>
                    )
                })}
            </ul>
        );
    };

    return (
        <div className={style.blockForList} onMouseOver={() => setDrop("block")} onMouseOut={() => setDrop("none")}>
            <li className={style.item}  >
                <Link to={"/Name-Ideas"} >
                    {header}
                    <i className="fa fa-angle-down" />
                </Link>
            </li>
            { DropDownList(item) }
        </div>
    )
}

export default ListItem;

