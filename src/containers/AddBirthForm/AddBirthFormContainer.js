import React, {Component} from 'react'
import AddBirthForm from '../../components/AddBirthForm/AddBirthForm'
import {connect} from 'react-redux'
import {addBirthAndRoute} from '../../actions'
import uuid from 'uuid'
import * as constants from '../../utils/constants'
import moment from 'moment'
import {getRouter} from '../../selectors'

class AddBirthFormContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: uuid(),
            name: '',
            date: '',
            tel: '',
            info: '',
            img: '',
            sex: 'male',
            filter: 'others',
            nameError: false,
            dateError: false,
            imgError:false

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.hasErrors()) {
            let {dateError,nameError, imgError, ...obj} = this.state;
            obj.date = moment(obj.date);
            this.setCorrectFilter(obj);
            this.props.onSubmit(obj);
            this.setStateToInitValue();
            this.props.router.location.pathname = '/';
        }
    }

    setStateToInitValue(){
        this.setState({
            id: uuid(),
            name: '',
            date: '',
            tel: '',
            info: '',
            img: '',
            sex: 'male',
            filter: 'others',
            nameError: false,
            dateError: false,
            imgError: false
        });
    }

    setCorrectFilter(obj) {
        const value = obj.filter;
        obj.filter = [];
        obj.filter.push(constants.SHOW_ALL);

        switch (value) {
            case 'family':
                obj.filter.push(constants.SHOW_FAMILY);
                break;
            case 'friends':
                obj.filter.push(constants.SHOW_FRIENDS);
                break;
            case 'work':
                obj.filter.push(constants.SHOW_WORK);
                break;
            default:
                obj.filter.push(constants.SHOW_OTHERS);
        }
    }

    hasErrors() {
        return this.hasNameErrors() || this.hasDateErrors() || this.hasImgError();
    }

    hasDateErrors() {
        if (!this.state.date) {
            this.setState({dateError: true});
            return true;
        }
        this.setState({dateError: false});
        return false;
    }

    hasImgError() {
        return this.state.imgError;
    }

    hasNameErrors() {
        if (!this.state.name || this.state.name.length > 20) {
            this.setState({nameError: true});
            return true;
        }
        this.setState({nameError: false});
        return false;
    }

    handleFileChange(fileObj) {
        const file = fileObj.files[0];
        const fileType = file["type"];
        const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
        if (file && validImageTypes.includes(fileType)) {
            const reader = new FileReader();

            reader.onload = (event) => {
                this.setState({
                    img: event.target.result
                });
            };
            reader.readAsDataURL(file);
            this.setState({imgError: false});
        }
        else {
            this.setState({imgError: true});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const {onSubmit} = this.props;
        return (
            <AddBirthForm
                onSubmit={onSubmit}
                localState={this.state}
                handleChange={this.handleChange}
                handleFileChange={this.handleFileChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        router: getRouter(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch(addBirthAndRoute(data));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBirthFormContainer);