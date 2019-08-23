import React from 'react';
import style from '../DrawContestForm/DrawContestForm.module.sass';


import Select from 'react-select';

import {isEqual} from 'lodash';

const onBlurValidation = (input, validation) => {
    if(!input.value){
        validation(input.value)
    }
    return input.onBlur()
};
let ContestFields = ({validation, dataSelect, input, meta, ...props}) => {
        let fieldInput;
        if(isEqual(props.type,"select")){
            fieldInput = <Select
                {...input}
                onBlur={() => onBlurValidation(input, validation)}
                options={dataSelect[props.dataType]}
                isMulti={props.isMulti}
            />
        }else if(isEqual(props.type,"textarea")){
            fieldInput = <textarea
                className={style.textarea}
                placeholder={props.placeholder}
                {...input}
            />
        }else if(isEqual(props.type,"input")){
            fieldInput = <input
                className={style.input}
                placeholder={props.placeholder}
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
