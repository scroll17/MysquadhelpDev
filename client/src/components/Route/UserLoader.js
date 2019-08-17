import React, { Component } from 'react';

import { getUser } from "../../actions/actionCreator";

import { TOKEN } from '../../utils/consts'

import connect from "react-redux/es/connect/connect";

class UserLoader extends Component{
    componentDidMount() {
        if (!this.props.user && localStorage.getItem(TOKEN.ACCESS_TOKEN)) {
            return this.props.getUser();
        }
    }

    render(){
        return(
            <> {this.props.children} </>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user,
});
const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserLoader);
