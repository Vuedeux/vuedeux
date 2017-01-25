# vuedoo

## Synopsis 

An open-source lightweight utility layer that binds Redux to Vuex allowing applications to incorporate Vue components while enjoying the benefits of both Redux and Vuex state management systems.

## Motivation
Knowing Redux has a broad user-base and support with a wide range of middlewares, tools, and bindings, the Vuedoo team set out to build a bridge to these benefits from the Vue-Vuex interface. By creating a compatibility layer between Redux and VueX we open access to Redux resources while maintaining the convenience and performance of VueX which has been designed from the ground up for use in Vue.  With the Vuedoo binding we aimed to create a simple way to re-use state-dependent code and deploy framework agnostic interfaces in highly-customizable and large-scale applications. 

## How It Works

The Veudeux component consist of two parts.  

1) The mixin
    The mixinCreator takes in Redux's actionCreators and reduxStore.  Utilizing these parameters the Vuex store (state & actions) is able to update with any changes taking place in the Redux store.

2) The plugin
    The pluginCreator takes in Redux's actionTypes and reduxStore.  It then automaitically translates the Redux action types into Vuex mutations that trigger (aka commit) a dispatch to the corresponding Redux actions, thus updating the Redux state via reducers. 

## Code Example
```js
import Vue from 'vue'
import Revue from 'revue'
import {createStore} from 'redux'
// create the logic how you would update the todos
import todos from './reducers/todos'
// create some redux actions
import actions from './actions'

// create a redux store
const reduxStore = createStore(todos)
// binding the store to Vue instance, actions are optional
const store = new Revue(Vue, reduxStore, actions)
// expose the store for your component to use
export default store
```

## Prerequisites
Redux, Vue, Vuex

## Installation

```
npm install vuedeux
```

## API Reference

## Built With


## Tests


## Contributers
Nikol Marentes, David Marx, & Brian Rudloff 