import { createStore, combineReducers } from 'redux';

import dreamsReducer from './reducers/dreams';

const rootReducer = combineReducers({
    dreams: dreamsReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;