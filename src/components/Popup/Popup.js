import React from 'react';
import propTypes from 'prop-types';
import PopupUnderLayer from './PopupUnderlayer';
import PopupBox from './PopupBox';

const Popup = ({isOpen, children}) => (
  <PopupUnderLayer isOpen={isOpen}>
    <PopupBox>{children}</PopupBox>
  </PopupUnderLayer>
);

Popup.propTypes = {
  isOpen: propTypes.bool.isRequired,
  children: propTypes.element.isRequired,
};

export default Popup;
