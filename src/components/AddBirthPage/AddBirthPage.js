import React, {Component} from 'react'
import {Container, Button, Form, FormGroup, Label, Input, FormFeedback} from 'reactstrap'
import uuid from 'uuid'
import moment from 'moment'
import * as constants from '../../utils/constants'

class AddBirthPage extends Component {
    constructor(props) {
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
            dateError: false

        };

        this.file = '';
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.hasErrors()) {
            let {dateError,nameError, ...obj} = this.state;
            obj.date = moment(obj.date);
            this.setCorrectFilter(obj);
            this.props.onSubmit(obj);
            this.setStateToInitValue();
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
            dateError: false
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
        if (this.hasNameErrors()) return true;
        if (this.hasDateErrors()) return true;

        return false;
    }

    hasDateErrors() {
        if (!this.state.date) {
            this.setState({dateError: true});
            return true;
        }
        this.setState({dateError: false});
        return false;
    }

    hasNameErrors() {
        if (!this.state.name || this.state.name.length > 20) {
            this.setState({nameError: true});
            return true;
        }
        this.setState({nameError: false});
        return false;
    }

    handleFileChange() {
        const file = this.file.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                this.setState({
                    img: event.target.result
                });
                //event.target.result assign to image source
            };
            reader.readAsDataURL(file);
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
        return (
            <Container className="py-3 pl-md-5">
                <Form type="post">
                    <FormGroup>
                        <Label for="name">Name*</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={this.state.name}
                            invalid={this.state.nameError}
                            onChange={this.handleChange}/>
                        <FormFeedback>Name field can't be empty and bigger than 30 symbols</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="birth-date">Birthday date*</Label>
                        <Input
                            type="date"
                            name="date"
                            value={this.state.date}
                            onChange={this.handleChange}
                            invalid={this.state.dateError}
                            id="birth-date"
                        />
                        <FormFeedback>Please, select date</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="tel">Phone</Label>
                        <Input
                            type="tel"
                            name="tel"
                            id="tel"
                            value={this.state.tel}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="select">Select category</Label>
                        <Input type="select" name="filter" id="select" value={this.state.filter}
                               onChange={this.handleChange}>
                            <option name="family" value="family">Family</option>
                            <option name="friends" value="friends">Friends</option>
                            <option name="work" value="work">Work</option>
                            <option name="others" value="others">Others</option>
                        </Input>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <Label>Sex</Label>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="sex"
                                    value="male"
                                    checked={this.state.sex === 'male'}
                                    onChange={this.handleChange}/>{' '}
                                Male
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="sex"
                                    value="female"
                                    checked={this.state.sex === 'female'}
                                    onChange={this.handleChange}/>{' '}
                                Female
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="text">Additional info</Label>
                        <Input
                            type="textarea"
                            name="info"
                            id="text"
                            value={this.state.info}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="file">Person avatar</Label><br/>
                        <input
                            type="file"
                            name="img"
                            id="file"
                            ref={node => {
                                this.file = node
                            }}
                            onChange={this.handleFileChange}
                        />
                        {this.state.img ? (<img className="thumb-form" src={this.state.img} alt=""/>) : false}
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default AddBirthPage;
