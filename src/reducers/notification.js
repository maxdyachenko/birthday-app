const notification = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return {isOpen: action.isOpen, text: action.text};
        case 'HIDE_NOTIFICATION':
            return {...state, isOpen: action.isOpen};
        default:
            return state;
    }
};

export default notification;