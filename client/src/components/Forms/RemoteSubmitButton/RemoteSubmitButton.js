import React from 'react'
import {connect} from 'react-redux'
import {submit} from 'redux-form'

const SubmitButton = ({dispatch}) => (
    <button
        type="submit"
        onClick={() => dispatch(submit('contest'))}
    >
        submit
    </button>
);

export default connect()(SubmitButton)