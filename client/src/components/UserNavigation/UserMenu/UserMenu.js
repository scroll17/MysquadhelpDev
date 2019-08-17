import React , { useState } from 'react';
import {Link} from "react-router-dom";

import style from './UserMenu.module.sass';
import {userLogout} from "../../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

import { URL } from '../../../api/baseURL'
import { ROLE, TOKEN } from '../../../utils/consts'

function UserNavigationSmartphone(props){
    const [displayStyle, setDisplayStyle] = useState('none');

    const toOpenMenu = () => {
        const nextDisplayStyle = displayStyle === "none" ? "block" : "none";
        setDisplayStyle(nextDisplayStyle);
    };

    const adminPanel = props.user.role === ROLE.ADMIN ?
                <Link to={URL.ADMIN_PANEL} style={{color: "#3ea9f5"}}><li>Admin panel</li></Link>
                : null;

    return (
        <div className={style.userMenu}>
            <div className={style.row}>
                    <div className={style.informUser} onMouseDown={(e) => {e.preventDefault()}} onClick={toOpenMenu}>
                        <div className={style.iconUser} />
                        { props.view === "desktop" && `Hi, ${props.user.firstName}` }
                        <i className="fas fa-angle-down" />
                    </div>

                {displayStyle === "block" &&
                    <ul className={style.dropdownMenu} >
                        <Link to={"/dashboard"}><li> View Dashboard </li></Link>
                        <Link to={"/myaccount"}><li> My Account </li></Link>
                        <Link to={"/messages"}><li> Messages </li></Link>
                        <Link to={"/affiliate-dashboard"}> <li> Affiliate Dashboard </li></Link>
                        {adminPanel}
                        <Link to={""} onClick={props.clickToLogout} ><li>Logout</li></Link>
                    </ul>
                }

                { props.view === "desktop" &&
                    <Link to={'/messages'} className={style.message} >
                        <i className="far fa-envelope" />
                    </Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user
});

const mapDispatchToProps = dispatch => ({
    clickToLogout: () => dispatch(userLogout(localStorage.getItem(TOKEN.REFRESH_TOKEN))),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNavigationSmartphone);

