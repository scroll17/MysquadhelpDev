import React, {useEffect} from 'react';
import style from './ContestForms.module.sass';

import connect from "react-redux/es/connect/connect";


import DrawContestForm from './DrawContestForm/DrawContestForm'
import RemoteSubmitButton from '../RemoteSubmitButton/RemoteSubmitButton'

import {createContest, prevContestStage, nextContestStage} from "../../../actions/actionCreator";

import { CONTEST } from "../../../utils/consts";
import { ContestNameForm } from '../../../utils/textAndLinksForPages'



import { last, isEmpty } from 'lodash';

function ContestForms(props){
    const { contestNow, contestQueue, contestFormData} = props;


    useEffect(() => {
           sessionStorage.setItem('contestNow', JSON.stringify(contestNow));
           sessionStorage.setItem('contestQueue', JSON.stringify(contestQueue));
           sessionStorage.setItem('contestFormData', JSON.stringify(contestFormData));
    });

    const nowFormContest = last(props.contestNow);


    const createNewContest = (values) => {
/*        Object.keys(values).forEach( item => {
            console.log(camelCase(item))
        });*/
        if(isEmpty(props.contestQueue)){
            return props.createNewContest(values)
        }else{
            return props.nextContestForm(values)
        }
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
                                form={CONTEST.NAME}
                                data={ContestNameForm[CONTEST.NAME]}
                                dataSelect={ContestNameForm['select']}
                              />)}

                            {nowFormContest === CONTEST.LOGO && (
                                <DrawContestForm
                                    onSubmit={createNewContest}
                                    form={CONTEST.LOGO}
                                    data={ContestNameForm[CONTEST.LOGO]}
                                    dataSelect={ContestNameForm['select']}
                                />)}

                            {nowFormContest === CONTEST.BANKS && (
                                <DrawContestForm
                                    onSubmit={createNewContest}
                                    form={CONTEST.BANKS}
                                    data={ContestNameForm[CONTEST.LOGO]}
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
                                <RemoteSubmitButton />
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
    contestFormData: state.contestReducers.contestFormData,
});
const mapDispatchToProps = dispatch => ({
    createNewContest: contest => dispatch(createContest(contest)),
    backToPrevStage: () => dispatch(prevContestStage()),
    nextContestForm: (contest) => dispatch(nextContestStage(contest))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestForms);