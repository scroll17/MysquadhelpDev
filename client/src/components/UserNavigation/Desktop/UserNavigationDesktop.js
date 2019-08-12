import React from 'react';
import style from './UserNavigationDesktop.module.sass';

import ContactsDetails from './ContactsDetails/ContactsDetails'
import LoginSignUp from './LoginSignUp/LoginSignUp'

function UserNavigationDesktop() {
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

export default UserNavigationDesktop;
