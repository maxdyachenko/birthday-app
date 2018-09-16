import React from 'react';
import {CSSTransition} from 'react-transition-group';
import propTypes from 'prop-types';
import {ANIMATION_DURATION} from '../../constants/utils';

const PopupUnderlayer = ({isOpen, children}) => (
  <CSSTransition
    in={isOpen}
    timeout={ANIMATION_DURATION}
    classNames="fade-popup">
    <div className="underlayer">{children}</div>
  </CSSTransition>
);

PopupUnderlayer.propTypes = {
  isOpen: propTypes.bool.isRequired,
  children: propTypes.element.isRequired,
};

export default PopupUnderlayer;
