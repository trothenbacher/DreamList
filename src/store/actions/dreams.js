import { ADD_DREAM, DELETE_DREAM, SELECT_DREAM, DESELECT_DREAM } from './actionTypes';

export const addDream = (dreamName) => {
    return {
        type: ADD_DREAM,
        dreamName: dreamName
    };
};

export const deleteDream = ()  => {
    return {
        type: DELETE_DREAM
    };
};

export const selectDream = (key) => {
    return {
        type: SELECT_DREAM,
        dreamKey: key
    };
};

export const deselectDream = () => {
    return {
        type: DESELECT_DREAM
    };
};