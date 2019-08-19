import React from 'react';
import style from './ListTo.module.sass';

import { Link } from "react-router-dom";

import * as _ from 'lodash';

function ListTo(props){
    const { active, clickToItem, } = props;

    const bannedUsers = active.map((user) => {
        if(user.isBanned){
            return user;
        }
    });

    const renderNames = () => {
        if(_.size(bannedUsers) > 0) {
            return bannedUsers.map( user => {
                const comma = (user === _.last(bannedUsers)) ? " " : ", ";
                return (
                    <span key={user.id} onClick={() => clickToItem(user.id, user.isBanned)}>
                        { `${user.firstName} id:${user.id}` }{comma}
                    </span>
                )
            })
        }else{
            return null
        }
    };

    return (
        <div className={style.listTo}>
            <div className={style.header}>
                <div className={style.to}>
                    To:
                </div>
                <div className={style.listName}>
                    {renderNames()}
                </div>
            </div>
            <Link to={'/'} className={style.headerHome}>
                <span>
                    Home
                </span>
            </Link>
        </div>
    );
}

export default ListTo;