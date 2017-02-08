import { createStore, applyMiddleware, compose } from 'redux';
import {reducer, STORAGE_KEY} from './reduxreducers';
import thunk from 'redux-thunk';

// For Chrome Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxStore = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

reduxStore.subscribe(()=>{
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reduxStore.getState().todos))
});

export default reduxStore;