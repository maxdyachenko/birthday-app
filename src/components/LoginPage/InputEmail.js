import React, {Fragment} from 'react';
import {Input, FormFeedback} from 'reactstrap';
import propTypes from 'prop-types';

const InputEmail = ({id, tabIndex, value, onChange, emailError}) => (
  <Fragment>
    <Input
      type="email"
      name="email"
      id={id}
      tabIndex={tabIndex}
      className="form-control"
      placeholder="example@mail.com"
      value={value || ''}
      onChange={onChange}
      invalid={emailError}
    />
    <FormFeedback>Should not be empty</FormFeedback>
  </Fragment>
);

InputEmail.propTypes = {
  id: propTypes.string,
  tabindex: propTypes.number,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  emailErorr: propTypes.string,
};

export default InputEmail;
