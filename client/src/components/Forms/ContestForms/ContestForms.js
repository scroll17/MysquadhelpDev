import React, {useEffect} from 'react';
import connect from "react-redux/es/connect/connect";

import style from './ContestForms.module.sass';

import DrawContestForm from './DrawContestForm/DrawContestForm'
import RemoteSubmitButton from '../../Buttons/RemoteSubmitButton/RemoteSubmitButton'
import BankForm from '../BankForm/BankForm'

import {createContest, prevContestStage, nextContestStage} from "../../../actions/actionCreator";
import { last, isEmpty, omit, tail, cloneDeep } from 'lodash';

import { CONTEST } from "../../../utils/consts";

function ContestForms(props){
    const { contestNow, contestQueue, contestFormData} = props;


    useEffect(() => {
        const contestStages = tail(contestNow);
        const formDataToSave = cloneDeep(contestFormData);

        contestStages.forEach( stage => {
            formDataToSave[stage] = omit(formDataToSave[stage], 'files');
        });
        sessionStorage.setItem('contestFormData', JSON.stringify(formDataToSave));

        sessionStorage.setItem('contestNow', JSON.stringify(contestNow));
        sessionStorage.setItem('contestQueue', JSON.stringify(contestQueue));
    });


    const nowFormContest = last(props.contestNow);
    const styleForBankFor = nowFormContest === CONTEST.BANKS ? {margin: "0 auto", width: "100%"} : {};

    const createNewContest = (values) => {
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
                <div className={style.container} style={styleForBankFor}>
                    <div className={style.row}>
                        <div className={style.blockFields} style={styleForBankFor}>


                          {nowFormContest === CONTEST.NAME && (
                              <DrawContestForm
                                onSubmit={createNewContest}
                                form={CONTEST.NAME}
                              />)}

                            {nowFormContest === CONTEST.LOGO && (
                                <DrawContestForm
                                    onSubmit={createNewContest}
                                    form={CONTEST.LOGO}
                                />)}

                            {nowFormContest === CONTEST.TAGLINE && (
                                <DrawContestForm
                                    onSubmit={createNewContest}
                                    form={CONTEST.TAGLINE}
                                />)}

                            {nowFormContest === CONTEST.BANKS && (
                                <BankForm
                                    onSubmit={createNewContest}
                                    form={CONTEST.BANKS}
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