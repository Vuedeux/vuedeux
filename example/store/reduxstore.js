import Vue from 'vue'
import { createStore, applyMiddleware, compose } from 'redux'
import {reducer, STORAGE_KEY} from './reduxreducers'

// second parameter is enabling the redux dev tools
export const reduxStore = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


reduxStore.subscribe(()=>{
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reduxStore.getState()))
	console.log("Todos from Redux", reduxStore.getState())
})
 
