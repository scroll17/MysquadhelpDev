import React from 'react';
import style from './UserNavigationDesktop.module.sass';

import connect from "react-redux/es/connect/connect";

import ContactsDetails from './ContactsDetails/ContactsDetails'
import LoginSignUp from './LoginSignUp/LoginSignUp'
import UserMenu from '../UserMenu/UserMenu'


function UserNavigationDesktop(props) {
    return (
        <header className={style.header}>
            <div className={style.headerTop}>
                <div className={style.container}>
                    <ContactsDetails />
                    {props.user ? <UserMenu view={"desktop"}/> : <LoginSignUp />}
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user
});
export default connect(mapStateToProps)(UserNavigationDesktop);
