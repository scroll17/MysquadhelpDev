import React , { useState } from 'react';
import style from './UserNavigationSmartphone.module.sass';

import { Link } from "react-router-dom";
import { URL } from '../../../api/baseURL'

import UserMenu from '../UserMenu/UserMenu'

import connect from "react-redux/es/connect/connect";

function UserNavigationSmartphone(props) {
    const [displayStyle, setDisplayStyle] = useState('none');

    const toOpenMenu = () => {
        const nextDisplayStyle = displayStyle === "none" ? "block" : "none";
        setDisplayStyle(nextDisplayStyle);
    };

    return (
        <header className={style.header}>
            <nav className={style.navBar}>
                <div className={style.container}>
                    <div className={style.navBarHeader}>

                        <Link to={'/'} className={style.navBarBrand}>
                            <img src={'https://www.squadhelp.com/images/squadhelp-logo-color.jpg'} alt={''} />
                        </Link>

                        <div className={style.navBarToggle}>
                            {props.user && <UserMenu />}

                            <div className={style.navBarToggleCollapsed} onClick={toOpenMenu} onMouseDown={(e) => {e.preventDefault()}}>
                                <i className="fas fa-bars" />
                            </div>

                        </div>


                        {displayStyle === "block" &&
                            <ul className={style.dropdownMenu} >

                                <li>
                                    <i className="fa fa-phone"/>
                                    <Link to={"tel:(877)355-3585"}>(877) 355-3585</Link>
                                </li>

                                {props.user ? null :
                                    <li>
                                        <Link to={URL.LOGIN}>Login</Link> / <Link to={URL.SIGN_UP}>Sign Up</Link>
                                    </li>
                                }

                                <li><Link to={"/"}>Name ideas</Link></li>
                                <li><Link to={"/"}>Contest</Link></li>
                                <li><Link to={"/"}>Our work</Link></li>
                                <li><Link to={"/"}>Names for sale</Link></li>
                                <li><Link to={"/"}>Blog</Link></li>
                            </ul>
                        }


                    </div>
                </div>
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user
});
export default connect(mapStateToProps)(UserNavigationSmartphone);

