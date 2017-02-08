# vuedeux

![Alt Text](https://github.com/dmrx/vuedoo/raw/master/examples/TodoMVC/assets/vuedeuxsmall.png)


## Full Documentation
https://vueduex.gitbooks.io/vuedeux-documentation/content/

## Synopsis 

Vuedeux is a lightweight open-source utility layer for binding Vuex to Redux in a way that allows developers to re-use their pre-existing Redux stores.

## Motivation
Vuedeux answers our team's desire to create a simple way to re-use and share state-management code with Vue/Vuex. The decision to create the Vuedeux compatibility layer between Vuex and Redux was inspired by the idea of uniting the quickly growing Vue community and Redux's broad user-base and ecosystem.

We love Vue & Vuex. We love the elegance and the tight integration. We love Redux. We love that it is framework agnostic and has a robust ecosystem of tools, middlewares, and bindings.

We wanted to make them work together in a developer-friendly and highly customizable way to encourage interoperability and streamline reusability of code bases.

Vuedeux allows Redux developers to feel at home in Vue while providing all the conveniences and efficiencies of Vuex.


## How It Works
The Vuedeux Plugin Creator takes your Redux action types and Redux store, and then maps your Redux state and all associated actions to a Vuex module with equivalent actions and mutations, allowing you to easily reuse your existing Redux state store and dispatch to Vuex just like you would with Redux.

## Prerequisites
Redux, Vue, Vuex

## FIRING UP A SIMPLE VUEDEUX EXAMPLE - TODO MVC
Fork and clone down a copy of this repository, and navigate to the directory within your terminal.

To download and install all dependencies

run:
```
 npm install
 ```

Start up the dev server
```
npm start
```

You should now be able to navigate to http://localhost:8080/ to demo the app.

The architecture of this classic TODO MVC app can be found in the examples folder and offers a simple example of the Vuedeux data flow from VueX to Redux and back.

## Installation
```
npm install vuedeux
```
## Getting Started
In this section we will be breaking down how to get started with the Vuedeux Plugin Creator.

The Vuedeux plugin initiates a Vuex module and maps all actions between the newly created Vuex module and Redux. It also keeps our Redux store and our Vuex 'Redux' module in sync.

### Importing the dependencies
```
import vdxPluginCreator from 'vuedeux';
import reduxStore from './reduxstore';
import * as reduxActionTypes from './actions/reduxactiontypes';
```
The dependencies for the Vuedeux plugin are:
* Vuedeux package
* Your Redux store
* Your Action Type CONSTANTS

It is common convention in Flux and Redux to identify your Action Types using Constants and group them together in their own file (as seen below) . Vuedeux relies on this convention in order to accurately map your Redux Action types to Vuex actions and mutations.

The PluginCreators expects your Action Type Constants in an object.
```
import * as reduxActionTypes from './actions/reduxactiontypes';
```
The following Node import statement is an easy way for you to create an action type object from your action types.
```
// ReduxActionTypes.js

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const COMPLETE_ALL = 'COMPLETE_ALL'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
```
### Generating the plugin
```
const vdx = vdxPluginCreator(reduxStore, reduxActionTypes);
```
Again, you may call the plugin anything you wish. Above we are calling our plugin 'vdx' for simplicty.

### Inserting the plugin into a Vuex Store
```
const store = new Vuex.Store({
state,
mutations,
plugins: [vdx],
});
```
To add the plugin simply place the plugin into the plugin option of your Vuex store.

All the existing mutations, actions , getters, even existing plugin you utilize in an existing Vuex state will be unaffected.

### Putting it all together
```
//vuex.js

import Vue from 'vue';
import Vuex from 'vuex';
import { state, mutations } from './mutations';

import vdxPluginCreator from 'vuedeux';
import reduxStore from './reduxstore';
import * as reduxActionTypes from './actions/reduxactiontypes';


// Make sure to call Vue.use(Vuex) first if you're using a Vue module build system
Vue.use(Vuex);

const vdx = vdxPluginCreator(reduxStore, reduxActionTypes);

const store = new Vuex.Store({
state,
mutations,
plugins: [vdx, localStoragePlugin],
});

export default store;
```

### Your new Vuex Structure
* VUEX STORE ($store in child components)
  * STATE ($store.state)
    * REDUX --- ($store.state.redux)
      * (Your existing Redux Store)

## Contributers
Nikol Marentes, David Marx, & Brian Rudloff 
