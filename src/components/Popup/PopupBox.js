import React from 'react'
import propTypes from 'prop-types'

const PopupBox = ({children}) => (
    <div className="box">
        {children}
    </div>
);

PopupBox.propTypes = {
    children: propTypes.element.isRequired
};

export default PopupBox;