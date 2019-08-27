import React from 'react';

import Select from 'react-select';

import style from '../DrawContestForm/DrawContestForm.module.sass';

import { TYPE_FIELD } from "../../../../utils/consts";

import { isEqual } from 'lodash';

const onBlurValidation = (input, validation) => {
    if(!input.value){
        validation(input.value)
    }
    return input.onBlur()
};

let ContestFields = ({validation, dataSelect, input, meta, ...props}) => {
        let fieldInput;

        if( isEqual(props.type, TYPE_FIELD.SELECT) ){
            fieldInput = <Select
                {...input}
                onBlur={() => onBlurValidation(input, validation)}
                options={dataSelect[props.dataType]}
                isMulti={props.isMulti}
            />
        }else if( isEqual(props.type, TYPE_FIELD.TEXTAREA) ){
            fieldInput = <textarea
                className={style.textarea}
                placeholder={props.placeholder}
                {...input}
            />
        }else if( isEqual(props.type, TYPE_FIELD.INPUT) ){
            fieldInput = <input
                className={style.input}
                placeholder={props.placeholder}
                {...input}
            />
        }else if( isEqual(props.type, TYPE_FIELD.INPUT_FILE) ){
            fieldInput = <input
                type={'file'}
                {...input}
            />
        }

        return (
            <div className={style.formGroup}>
                <label className={style.label}>
                    {props.label}
                </label>
                <span className={style.span}>
                    {props.hint}
                </span>

                {fieldInput}

                {meta.touched && meta.error ?
                    <p className={style.error}>{meta.error}</p>
                    :
                    null
                }
            </div>
        )
};
export default ContestFields;
