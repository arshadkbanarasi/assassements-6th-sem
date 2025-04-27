import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import footballMatchesReducer from './reducers';

const store = createStore(footballMatchesReducer, applyMiddleware(thunk));

export default store;
