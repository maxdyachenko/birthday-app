import React from 'react'
import AddBirthPage from '../../components/AddBirthPage/AddBirthPage'
import {connect} from 'react-redux'
import {addBirth} from '../../actions'

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch(addBirth(data));
        }
    }
};

export default connect(undefined, mapDispatchToProps)(AddBirthPage);