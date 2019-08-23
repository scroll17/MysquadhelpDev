import React from 'react';
import style from './DrawContestForm.module.sass';

import {Field, reduxForm} from 'redux-form';

import ContestFields from '../ContestFields/ContestFields'

const validation = (value) => {
    if(!value){
        return "Please fill this field"
    }
};



let NameForm = (props) => {
    const {data, dataSelect} = props;

    const {handleSubmit} = props;

    const renderField = (fieldData) => {
        return <Field validate={validation}
                      {...fieldData}
                      key={fieldData.name}
                      dataSelect={dataSelect}
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