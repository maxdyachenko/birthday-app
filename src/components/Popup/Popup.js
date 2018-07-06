import React from 'react'
import PopupUnderLayer from './PopupUnderlayer'
import PopupBox from './PopupBox'

const Popup = ({isOpen, children}) => (
    <PopupUnderLayer isOpen={isOpen}>
        <PopupBox>
            {children}
        </PopupBox>
    </PopupUnderLayer>
);

export default Popup;