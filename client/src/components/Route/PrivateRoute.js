import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

import { MoonLoader } from "react-spinners";

import {getAllUsers, getUser} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

class PrivateRoute extends Component{
    renderPage(){
        const { user, isFetching, requireRole} = this.props;
        if ((!user || user.role !== requireRole) && isFetching === 'answered'){
            return <Redirect to='/notfound' />;
        }
        return( <Route path={this.props.path}  component={this.props.component}/> )
    }

    static renderLoader() {
        return (<MoonLoader size={200} />);
    }

    render(){
        return(
            <>
                {this.renderPage()}
            </>
        )
    }

}

const mapStateToProps = (state) => ({
    user: state.userReducers.user,
    users: state.userReducers.users,
    isFetching: state.userReducers.isFetching,
});
const mapDispatchToProps = (dispatch) => ({
    getAllUsers: () => dispatch(getAllUsers()),
    getUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);


/*
{isFetching === "requested" ?
    null//PrivateRoute.renderLoader()
    :
    this.renderPage()
}*/
