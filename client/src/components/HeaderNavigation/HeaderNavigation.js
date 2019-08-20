import React  from 'react';
import style from './HeaderNavigation.module.sass';

import { Link } from "react-router-dom";

import { URL } from '../../api/baseURL'

import ButtonsHomePage from '../Buttons/ButtonsHomePage/ButtonsHomePage'

import { textForForHeaderNavigation } from '../../utils/textAndLinksForPages'

import ListItem from './ListItem/ListItem'

function HeaderNavigation(){

    const dropDownMenu = ( lists ) => {
        return lists.map( list => {
            return <ListItem list={list} key={list.header}/>
        })
    };

        return (
            <div className={style.header}>
                <div className={style.container}>
                    <div className={style.row}>

                        <Link to={'/'} className={style.link}>
                            <div className={style.logo} />
                        </Link>

                        <div className={style.list} >
                            <ul className={style.headerList}>
                                {dropDownMenu(textForForHeaderNavigation)}
                            </ul>
                        </div>

                        <ButtonsHomePage link={URL.CONTEST_TYPE}>start contest</ButtonsHomePage>

                    </div>
                </div>
            </div>
        )
}

export default HeaderNavigation;
