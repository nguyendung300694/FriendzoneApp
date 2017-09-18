import { createStore, combineReducers } from 'redux';
import LangReducer from '../reducer/LangReducer';

const reducer = combineReducers({
    lang: LangReducer
});

const store = createStore(reducer);

export default store;
