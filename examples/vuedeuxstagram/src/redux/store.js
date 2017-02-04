/* eslint-disable */

import { createStore, compose } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

// import data
import comments from './data/comments';
import posts from './data/posts';

// create an object for default data
// property key and data variable the same name.
const defaultState = {
	posts,
	comments,
};

//  Include "window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()" as a parameter for createStore to activate Redux dev tools
const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;