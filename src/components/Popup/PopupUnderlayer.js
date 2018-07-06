import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {ANIMATION_DURATION} from '../../utils/constants'

const PopupUnderlayer = ({isOpen, children}) => (
    <CSSTransition
        in={isOpen}
        timeout={ANIMATION_DURATION}
        classNames='fade-popup'
    >
        <div className="underlayer">
            {children}
        </div>
    </CSSTransition>
);

export default PopupUnderlayer;