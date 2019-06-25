import { ADD_DREAM, DELETE_DREAM, SELECT_DREAM, DESELECT_DREAM } from '../actions/actionTypes';

const initialState = {
    dreams: [],
    selectedDream: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DREAM:
            return {
                ...state,
                dreams: state.dreams.concat({
                    key: Math.random(), //TODO use real unique key
                    name: action.dreamName
                })
            };
        case DELETE_DREAM:
            return {
                ...state,
                dreams: state.dreams.filter(dream => {
                    return dream.key !== state.selectedDream.key;
                }),
                selectedDream: null
            };
        case SELECT_DREAM:
            return {
                ...state,
                selectedDream: state.dreams.find(dream => {
                    return dream.key === action.dreamKey;
                })
            };
        case DESELECT_DREAM:
            return {
                ...state,
                selectedDream: null
            };
        default:
            return state;
    }
};

export default reducer;