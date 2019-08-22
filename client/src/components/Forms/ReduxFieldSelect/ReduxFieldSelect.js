import React from 'react';
import Select from 'react-select';

const ReduxFieldSelect = props => {
    const {  input, options, isMulti } = props;

    return (
        <Select
            {...input}
            //onBlur={() => (input.value)}
            options={options}
            isMulti={isMulti}
        />
    )
};

export default ReduxFieldSelect;