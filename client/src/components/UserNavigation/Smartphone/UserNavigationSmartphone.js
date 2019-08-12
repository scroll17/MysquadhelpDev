import React , { useState } from 'react';
import style from './UserNavigationSmartphone.module.sass';

import { Link } from "react-router-dom";

function UserNavigationSmartphone() {
    const [display, setDisplay] = useState('none');

    const toOpenMenu = () => {
        const status = display === "none" ? "block" : "none";
        setDisplay(status);
    };

    return (
        <header className={style.header}>
            <nav className={style.navBar}>
                <div className={style.container}>
                    <div className={style.navBarHeader}>

                        <Link to={'/'} className={style.navBarBrand}>
                            <img src={'https://www.squadhelp.com/images/squadhelp-logo-color.jpg'} alt={''} />
                        </Link>

                        <div className={style.navBarToggleCollapsed} onClick={toOpenMenu} onMouseDown={(e) => {e.preventDefault()}}>
                            <i className="fas fa-bars" />
                        </div>

                        {display === "block" &&
                            <ul className={style.dropdownMenu} >

                                <li>
                                    <i className="fa fa-phone"/>
                                    <Link to={"tel:(877)355-3585"}>(877) 355-3585</Link>
                                </li>

                                <li>
                                    <Link to={"/login"}>Login</Link> / <Link to={"/signup"}>Sign Up</Link>
                                </li>

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

export default UserNavigationSmartphone;
