import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Router } from 'react-router'

import connect from "react-redux/es/connect/connect";
import history from "./boot/browserHistory";


import MainHomePage from './pages/MainHomePage/MainHomePage';
import LoginPages from './pages/LoginPages/LoginPages';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import UserLoader from './components/Route/UserLoader';


class App extends Component{
    IfUserIsLoggedIn(component){
        if(this.props.user){
            return () => <Redirect to='/'/>
        }
        return component
    }

    render(){
        return(
            <UserLoader>
                <Router history={history}>
                    <Switch>
                        <Route exact path={"/"}  component={MainHomePage}/>
                        <Route path={"/login"} component={LoginPages}/>
                        <Route component={ NotFoundPage } />
                    </Switch>
                </Router>
            </UserLoader>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user,
});
export default connect(mapStateToProps)(App);
