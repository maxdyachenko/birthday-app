import React from 'react'
import PopupUnderLayer from './PopupUnderlayer'
import PopupBox from './PopupBox'
import propTypes from 'prop-types'

const Popup = ({isOpen, children}) => (
    <PopupUnderLayer isOpen={isOpen}>
        <PopupBox>
            {children}
        </PopupBox>
    </PopupUnderLayer>
);

Popup.propTypes = {
    isOpen: propTypes.bool.isRequired,
    children: propTypes.element.isRequired
};

export default Popup;