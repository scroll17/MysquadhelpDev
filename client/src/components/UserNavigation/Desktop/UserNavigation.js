import React from 'react';
import style from './UserNavigation.module.sass';

import ContactsDetails from './ContactsDetails/ContactsDetails'
import LoginSignUp from './LoginSignUp/LoginSignUp'

function UserNavigation() {
    return (
        <header className={style.header}>
            <div className={style.headerTop}>
                <div className={style.container}>
                    <ContactsDetails />
                    <LoginSignUp />
                </div>
            </div>
        </header>
    )
}

export default UserNavigation;
