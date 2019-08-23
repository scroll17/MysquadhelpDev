import React, {useEffect} from 'react';
import style from './ContestForms.module.sass';

import connect from "react-redux/es/connect/connect";


import DrawContestForm from './DrawContestForm/DrawContestForm'
import RemoteSubmitButton from '../RemoteSubmitButton/RemoteSubmitButton'

import {createContest, prevContestStage, nextContestStage} from "../../../actions/actionCreator";

import { CONTEST } from "../../../utils/consts";
import { ContestNameForm } from '../../../utils/textAndLinksForPages'


import { last, isEmpty, camelCase } from 'lodash';

function ContestForms(props){
    const { contestNow, contestQueue} = props;


    useEffect(() => {
           sessionStorage.setItem('contestNow', JSON.stringify(contestNow));
           sessionStorage.setItem('contestQueue', JSON.stringify(contestQueue));
    });

    const nowFormContest = last(props.contestNow);


    const createNewContest = (values) => {
        Object.keys(values).forEach( item => {
            console.log(camelCase(item))
        });
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


                          {nowFormContest === CONTEST.NAME && (
                              <DrawContestForm
                                onSubmit={createNewContest}
                                data={ContestNameForm['name']}
                                dataSelect={ContestNameForm['select']}
                              />)}

                            {nowFormContest === CONTEST.BANKS && (
                                <DrawContestForm
                                    onSubmit={createNewContest}
                                    data={ContestNameForm['name']}
                                    dataSelect={ContestNameForm['select']}
                                />)}

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
                                <div onClick={() => backToPrevStage()} className={style.divBack}>Back</div>
                                {isEmpty(props.contestQueue) ?
                                    <RemoteSubmitButton />
                                    :
                                    <button
                                        onClick={() => props.nextContestForm()}>
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