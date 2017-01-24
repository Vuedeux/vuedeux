import Vue from 'vue'
// import Revue from 'revue'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import {reducer, STORAGE_KEY} from './reduxreducers'
// import * as actions from './reduxactions'


// composeEnhancers is enabling the redux dev tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  export const reduxStore = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

reduxStore.subscribe(()=>{
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reduxStore.getState().todos))
	console.log("Todos from Redux", reduxStore.getState().todos)
})

// export const revueStore = new Revue(Vue, reduxStore, actions)

// If in dev mode we set a local memory store to store?
// if (typeof __DEV__ !== 'undefined' && __DEV__) {
// 	window.store = store
// }

