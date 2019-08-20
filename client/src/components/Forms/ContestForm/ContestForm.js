import React from 'react';
import style from './ContestForm.module.sass';

import connect from "react-redux/es/connect/connect";

import NameForm from './NameForm/NameForm'

import RemoteSubmitButton from '../RemoteSubmitButton/RemoteSubmitButton'

import {createContest, prevContestStage} from "../../../actions/actionCreator";

function ContestForm(props){

    const nowFormContest = props.contest[props.contest.length-1];


    const createNewContest = (values) => {
        return props.createNewContest(values)
    };

    const backToPrevStage = () => {
        return props.backToPrevStage()
    };

        return (
            <div className={style.stepsForm}>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.blockFields}>


                          {nowFormContest === "name" && ( <NameForm onSubmit={createNewContest}/>  )}

                        </div>

                    </div>
                </div>


                {nowFormContest !== "select" && (
                    <div className={style.nextSteps}>
                        <div className={style.containerSteps}>

                            <div className={style.stepsText}>
                                <p>You are almost finished. Select a pricing package in the next step</p>
                            </div>

                            <div className={style.stepsNavigation}>
                                <div onClick={backToPrevStage}>Back</div>
                                <RemoteSubmitButton />
                            </div>

                        </div>
                    </div>
                )}

            </div>
        );

}

const mapStateToProps = (state) => ({
    contest: state.userReducers.contest
});
const mapDispatchToProps = dispatch => ({
    createNewContest: contest => dispatch(createContest(contest)),
    backToPrevStage: () => dispatch(prevContestStage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestForm);