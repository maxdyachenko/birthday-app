const data = (state = [], action) => {
    switch (action.type) {
        case 'DELETE_ROW':
            return state.filter( item => {
                return item.id !== action.id
            });
        case 'ADD_BIRTH':
            return [
                ...state,
                action.data
            ];
        case 'EDIT_BIRTH':
            return state.map( item => {
                return item.id !== action.data.id ? item : action.data
            });
        default:
            return state;
    }
};

export default data;