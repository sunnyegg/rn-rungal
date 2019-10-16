import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import ReduxThunk from 'redux-thunk';

import reducers from './Reducers/index';

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(logger, promiseMiddleware));
// const store = createStore(reducers, applyMiddleware(logger, ReduxThunk));

export default store;
