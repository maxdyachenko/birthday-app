import React, {Fragment} from 'react';
import {Input, FormFeedback} from 'reactstrap';
import propTypes from 'prop-types';

const InputPassword = ({id, tabIndex, value, onChange, emailError}) => (
  <Fragment>
    <Input
      type="password"
      name="password"
      id={id}
      tabIndex={tabIndex}
      className="form-control"
      placeholder="Password"
      value={value || ''}
      onChange={onChange}
      invalid={emailError}
    />
    <FormFeedback>Should be less than 20 chars and not empty</FormFeedback>
  </Fragment>
);

InputPassword.propTypes = {
  id: propTypes.string,
  tabindex: propTypes.number,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  emailErorr: propTypes.string,
};

export default InputPassword;
