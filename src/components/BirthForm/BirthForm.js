import React from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import Popup from '../Popup/Popup';
import PopupContent from './PopupContent';

const BirthForm = ({
  localState,
  handleChange,
  handleSubmit,
  handleFileChange,
  getImgUrl,
}) => {
  let file = '';
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
            value={localState.name}
            invalid={localState.nameError}
            onChange={handleChange}
          />
          <FormFeedback>
            Name field can't be empty and bigger than 30 symbols
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="birth-date">Birthday date*</Label>
          <Input
            type="date"
            name="date"
            value={localState.date}
            onChange={handleChange}
            invalid={localState.dateError}
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
            value={localState.tel}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="select">Select category</Label>
          <Input
            type="select"
            name="filter"
            id="select"
            value={
              Array.isArray(localState.filter)
                ? localState.filter[1]
                : localState.filter
            }
            onChange={handleChange}>
            <option name="family" value="family">
              Family
            </option>
            <option name="friends" value="friends">
              Friends
            </option>
            <option name="work" value="work">
              Work
            </option>
            <option name="others" value="others">
              Others
            </option>
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
                checked={localState.sex === 'male'}
                onChange={handleChange}
              />{' '}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sex"
                value="female"
                checked={localState.sex === 'female'}
                onChange={handleChange}
              />{' '}
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
            value={localState.info}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="file">Person avatar</Label>
          <br />
          <input
            type="file"
            name="img"
            id="file"
            ref={node => {
              file = node;
            }}
            className={
              localState.imgError ? 'is-invalid form-control' : 'form-control'
            }
            onChange={() => handleFileChange(file)}
          />
          {localState.img &&
          !localState.imgError &&
          !localState.thumbPopupOpen ? (
            <img className="thumb-form" src={localState.img} alt="" />
          ) : (
            false
          )}
          <FormFeedback>Please, select image [png, jpeg, gif]</FormFeedback>
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
      {ReactDOM.createPortal(
        <Popup isOpen={localState.thumbPopupOpen}>
          <PopupContent image={localState.img} sendImgToParent={getImgUrl} />
        </Popup>,
        document.getElementById('root'),
      )}
    </Container>
  );
};

// {localState, handleChange, handleSubmit, handleFileChange, getImgUrl}
BirthForm.propTypes = {
  localState: propTypes.shape({
    id: propTypes.string,
    name: propTypes.string,
    date: propTypes.string,
    tel: propTypes.string,
    info: propTypes.string,
    img: propTypes.string,
    sex: propTypes.string,
    male: propTypes.string,
    // filter: propTypes.string || propTypes.array   hidden because of some weird logic, should be rewritten
    //                                              could accept string "others" could accept array ['SHOW_FAMILY]
    filter: propTypes.any,
  }),
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  handleFileChange: propTypes.func.isRequired,
  getImgUrl: propTypes.func.isRequired,
};

export default BirthForm;
