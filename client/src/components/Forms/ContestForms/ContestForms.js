import React, {useEffect} from 'react';
import style from './ContestForms.module.sass';

import connect from "react-redux/es/connect/connect";

import NameForm from './NameForm/NameForm'

import RemoteSubmitButton from '../RemoteSubmitButton/RemoteSubmitButton'

import {createContest, prevContestStage, nextContestStage} from "../../../actions/actionCreator";

import { CONTEST } from "../../../utils/consts";
import { last, isEmpty } from 'lodash';

function ContestForms(props){
    const { contestNow, contestQueue} = props;


    useEffect(() => {
           sessionStorage.setItem('contestNow', JSON.stringify(contestNow));
           sessionStorage.setItem('contestQueue', JSON.stringify(contestQueue));
    });

    const nowFormContest = last(props.contestNow);


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


                          {nowFormContest === CONTEST.NAME && ( <NameForm onSubmit={createNewContest}/>  )}
                          {nowFormContest === CONTEST.BANKS && ( <NameForm onSubmit={createNewContest}/>  )}

                        </div>

                    </div>
                </div>


                {nowFormContest !== CONTEST.SELECT && (
                    <div className={style.nextSteps}>
                        <div className={style.containerSteps}>

                            <div className={style.stepsText}>
                                <p>You are almost finished. Select a pricing package in the next step</p>
                            </div>

                            <div className={style.stepsNavigation}>
                                <div onClick={backToPrevStage}>Back</div>
                                {isEmpty(props.contestQueue) ?
                                    <RemoteSubmitButton />
                                    :
                                    <button  onClick={() => props.nextContestForm()}>
                                        next
                                    </button>
                                }
                            </div>

                        </div>
                    </div>
                )}

            </div>
        );

}

const mapStateToProps = (state) => ({
    contestNow: state.contestReducers.contestNow,
    contestQueue: state.contestReducers.contestQueue,
});
const mapDispatchToProps = dispatch => ({
    createNewContest: contest => dispatch(createContest(contest)),
    backToPrevStage: () => dispatch(prevContestStage()),
    nextContestForm: () => dispatch(nextContestStage())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestForms);