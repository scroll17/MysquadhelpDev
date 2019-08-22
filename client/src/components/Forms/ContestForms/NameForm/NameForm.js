import React from 'react';
import style from '../StyleForms.module.sass';


import ReduxFormSelect from '../../ReduxFieldSelect/ReduxFieldSelect'

import { Field, reduxForm } from 'redux-form';

let NameForm = (props) => {

    const typeOfVenture = [
            {value:'Company', label:'Company'},
            {value:'Product', label:'Product'},
            {value:'Project', label:'Project'}
        ];

    const type = [
        {value:'Select Type of Name', label:'Select Type of Name'},
        {value:'a Business Name', label:'a Business Name'},
        {value:'a Brand Name', label:'a Brand Name'},
        {value:'a Product Name', label:'a Product Name'},
        {value:'a Website Name', label:'a Website Name'},
        {value:'a Book Title', label:'a Book Title'},
        {value:'an App Name', label:'an App Name'},
        {value:'a Movie or Documentary Title', label:'a Movie or Documentary Title'},
    ];

    const { handleSubmit } = props;

    return(
        <div className={style.clearFix}>
            <form onSubmit={ handleSubmit }>

                <div className={style.formGroup}>
                    <label>What type of Name are you looking for?</label>
                    <Field name="type" component={ReduxFormSelect} options={type} />
                </div>

                <div className={style.formGroup}>
                    <label>Select a category that best describes your businessAgency</label>
                    <Field name="typeOfVenture" component={ReduxFormSelect} options={typeOfVenture} isMulti/>
                </div>

                <div className={style.formGroup}>
                    <label>What does your company / business do?</label>
                    <Field name="whatVentureDoes" component="textarea"
                           placeholder="e.g. We're an online lifestyle brand that provides stylish and high quality apparel to the expert eco-conscious shopper." />
                </div>

                <div className={style.formGroup}>
                    <label>Tell us about your customers</label>
                    <span>Share any relevant information such as their demographics, interests, aspirations etc.</span>
                    <Field name="targetCustomers" component="textarea" placeholder="" />
                </div>

                <div className={style.formGroup}>
                    <label>What character, spirit or emotion do you want the name to convey?</label>
                    <span>You can use adjectives such as serious, fun, professional etc</span>
                    <Field name="style" component="textarea" placeholder="" />
                </div>

                <div className={style.formGroup}>
                    <label>Any other details that are relevant to this project?</label>
                    <span>Is there anything else that you haven't covered so far, but might be relevant to the project? </span>
                    <Field name="description" component="textarea"
                           placeholder="Share any additional information or direction that might be useful to creatives" />
                </div>

            </form>
        </div>
    )
};

NameForm = reduxForm ({
    form: 'contest',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(NameForm);

export default NameForm;
