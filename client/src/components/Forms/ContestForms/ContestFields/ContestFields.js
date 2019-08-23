import React from 'react';
import style from '../DrawContestForm/DrawContestForm.module.sass';


import Select from 'react-select';

import {isEqual} from 'lodash';

const onBlurValidation = (input, validation) => {
    if(!input.value){
        validation(input.value)
    }
    input.onBlur(input.value)
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
                placeholder={props.placeholder}
                {...input}
            />
        }

        return (
            <div className={style.formGroup}>
                <label>{props.label}</label>
                <span>{props.hint}</span>
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
