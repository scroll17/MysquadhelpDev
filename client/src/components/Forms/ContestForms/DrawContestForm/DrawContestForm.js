import React from 'react';
import style from '../StyleForms.module.sass';

import ReduxFormSelect from '../../ReduxFieldSelect/ReduxFieldSelect'

import {Field, reduxForm} from 'redux-form';

import {isEqual} from 'lodash';

const validation = (value) => {
    if(!value){
        return "Please fill this field"
    }
};

let NameForm = (props) => {
    const {data, dataSelect} = props;

    const {handleSubmit} = props;

    const MyAwesomeInput = ({input, meta, ...props}) => {
        let field;
        if(isEqual(props.type,"select")){
            field = <ReduxFormSelect
                options={dataSelect[props.dataType]}
                isMulti={props.isMulti}
                {...input}
            />
        }else if(isEqual(props.type,"textarea")){
            field = <textarea
                placeholder={props.placeholder}
                {...input}
            />
        }

        return (
            <div className={style.formGroup}>
                <label>{props.label}</label>
                <span>{props.hint}</span>

                {field}

                {meta.touched && meta.error ?
                    <p className={style.error}>{meta.error}</p>
                    :
                    null
                }
            </div>
        )
    };


    const renderField = (fieldData) => {
        return <Field validate={validation}
                      {...fieldData}
                      key={fieldData.name}
                      component={MyAwesomeInput}/>
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
    form: 'contest',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(NameForm);

export default NameForm;

/*    const names = (data) => {
        return data.map(field => {
            return field.name
        });
    };

    const showFields = (data, props) => {
        const {names} = props;
        return data.map((fieldData, id) => {
            const {touched, error} = props[names[id]].meta;
            let field;


            if (isEqual(fieldData.component, 'select')) {
                field = (
                    <Field
                        name={fieldData.name}
                        component={ReduxFormSelect}
                        options={dataSelect[fieldData.type]}
                        isMulti={fieldData.isMulti}
                    />
                )
            } else {
                field = (
                    <Field validate={[textValidate]}
                           name={fieldData.name}
                           component={fieldData.component}
                           placeholder={fieldData.placeholder}
                    />
                )
            }
            return (
                <div className={style.formGroup} key={fieldData.name}>
                    <label>{fieldData.label}</label>
                    {fieldData.hint ? (<span>{fieldData.hint}</span>) : null}
                    {field}
                    {error ?
                        <p className={style.error}>{error}</p>
                        :
                        null
                    }
                </div>
            )
        })


    };*/

/*

const lenght10 = /.{10,}/;
const textValidate = (value) => {
    if (value) {
        return value.match(lenght10) ? undefined : 'Super mega error!!!!!!!!11111111111';
    }
}

const required = (value) => {
    if (!value)
        return 'it is required';
};
const validateA = (value) => {
    if (value)
        return value.match(/^.{10,}$/) ? undefined : 'AAAAAAAAAAAAAAAAAAAAA';

};
const validateB = (value) => {
    if (value)
        return value.match(/^.{10,}$/) ? undefined : 'SBBBBBBBBBBB';
};
const validateC = (value) => {
    if (value)
        return value.match(/^.{10,}$/) ? undefined : 'CCCCCCCCCCCCCCCCC';
};


const contestFormFieldValidateMap = new Map([
    [contestForm.name[2].name, [validateA, required]],
    [contestForm.name[3].name, validateB],
    [contestForm.name[4].name, validateC],

]);
*/