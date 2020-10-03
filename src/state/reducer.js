export const initialState = {
    page: null
};

export const actionTypes = {
    SET_PAGE: 'SET_PAGE',
};

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET_PAGE:
            return {
                ...state,
                page: action.pageName
            };
        
        default:
            return state;
    }
};

export default reducer;