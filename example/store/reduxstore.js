import { createStore, applyMiddleware, compose } from 'redux';
import {reducer, STORAGE_KEY} from './reduxreducers';
import thunk from 'redux-thunk';

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxStore = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk, logger)
));

reduxStore.subscribe(()=>{
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reduxStore.getState().todos))
});

export default reduxStore;