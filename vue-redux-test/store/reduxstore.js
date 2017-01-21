import Vue from 'vue'
import Revue from 'revue'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reduxreducers'
import * as actions from './reduxactions'

// const persistedState = localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : {}


const reduxStore = createStore(reducer, applyMiddleware(thunk));
const store = new Revue(Vue, reduxStore, actions)

// store.subscribe(()=>{
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState()))
// })

console.log("I'm in your redux store. Here are your actions", actions)
// If in dev mode we set a local memory store to store?
if (typeof __DEV__ !== 'undefined' && __DEV__) {
	window.store = store
}

export default store