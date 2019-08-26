import React from 'react';
import {Field, reduxForm} from 'redux-form';
import connect from "react-redux/es/connect/connect";

import style from './DrawContestForm.module.sass';

import ContestFields from '../ContestFields/ContestFields'

import { DataForTheContestForm } from '../../../../utils/textAndLinksForPages'

import { TYPE_FIELD } from "../../../../utils/consts";

import { last } from 'lodash'

const validation = (value) => {
    if(!value){
        return "Please fill this field"
    }
};

let NameForm = (props) => {
    const { data } = props;

    const {handleSubmit} = props;

    const renderField = (fieldData) => {
        return <Field validate={validation}
                      {...fieldData}
                      key={fieldData.name}
                      dataSelect={DataForTheContestForm[TYPE_FIELD.SELECT]}
                      validation={validation}
                      component={ContestFields}/>
    };
    const renderFields = () => {
        return data.map(fieldData => renderField(fieldData));
    };
    return (
        <div className={style.clearFix}>
            <form onSubmit={handleSubmit}>
                {
                    renderFields()
                }
            </form>
        </div>
    )
};

NameForm = reduxForm({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(NameForm);

export default NameForm = connect(state => {
    const { contestFormData, contestNow } = state.contestReducers;
    return ({
        initialValues: contestFormData[last(contestNow)],
    })
})(NameForm)

