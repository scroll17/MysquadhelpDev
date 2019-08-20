import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

import style from "./ContestPage.module.sass";


import ContestSteps from '../../components/Contest/ContestSteps'
//import ContestsForm from '../../components/Forms/ContestForm/ContestForm'
//import StartContestSteps from "../../components/Contest/StartContestSteps/StartContestSteps";

import UserNavigation from "../../components/UserNavigation/UserNavigation";


//import { nextContestStage } from "../../actions/actionCreator";

class ContestPage extends Component{

    render() {
        return (
            <>

                <UserNavigation />


                <ContestSteps />
            </>
        )
    }

}


const mapStateToProps = (state) => ({
    //contest: state.userReducers.contest,
});
const mapDispatchToProps = dispatch => ({
    //nextContestStage: () => dispatch(nextContestStage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestPage);
