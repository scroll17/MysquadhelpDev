import React from 'react';
import connect from "react-redux/es/connect/connect";

import {Field, reduxForm} from 'redux-form';

import style from './DrawContestForm.module.sass';

import ContestFields from '../ContestFields/ContestFields'

import { DataForTheContestForm } from '../../../../utils/textAndLinksForPages'

import { TYPE_FIELD } from "../../../../utils/consts";

import { last, isObject } from 'lodash'

const validation = (value) => {
    if(!value){
        return "Please fill this field"
    }else if(value && !isObject(value)){

        const str = value.replace(/\s+/g, '');
        if(str.length === 0){
            return "Please fill this field"
        }
    }
};


let DrawContestForm = (props) => {
    const { data, handleSubmit } = props;


    const renderField = (fieldData) => {
        return <Field validate={validation}
                      {...fieldData}
                      key={fieldData.name}
                      dataSelect={DataForTheContestForm[TYPE_FIELD.SELECT]}
                      validation={
                          fieldData.type === 'file' ? '' : validation
                      }
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

DrawContestForm = reduxForm({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(DrawContestForm);

export default DrawContestForm = connect(state => {
    const { contestFormData, contestNow } = state.contestReducers;
    return ({
        initialValues: contestFormData[last(contestNow)],
    })
})(DrawContestForm)

