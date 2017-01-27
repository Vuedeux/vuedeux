# vuedeux

![alt tag](https://github.com/brianrudloff/vuedoo/blob/styleupdate/dollsmall.png)

## Documentation
https://vueduex.gitbooks.io/vuedeux-documentation/content/

## Synopsis 

An open-source lightweight utility layer that binds Redux to Vuex, allowing applications to incorporate Vue components while enjoying the benefits of both Redux and Vuex state management systems.

## Motivation
Vuedeux answers our team's desire to create a simple way to re-use and share state-dependent code with Vuex. The decision to create Vuedeux, a compatibility layer between Vuex and Redux, was inspired by the split between the quickly growing Vue/Vuex community and the broad user-base and support for Redux's wide range of middlewares, tools, and bindings.

The Vuedeux team recognized that building a bridge between the Vue/Vuex ecosystem and Redux could bring a multitude of benefits and open access to Redux resources while maintaining the convenience and performance of Vuex as the Vue/Vuex community grows.

## How It Works

The Veudeux component consist of two parts.  

1) The mixin
    The mixinCreator takes in Redux's actionCreators and reduxStore.  Utilizing these parameters the Vuex store (state & actions) is able to update with any changes taking place in the Redux store.

2) The plugin
    The pluginCreator takes in Redux's actionTypes and reduxStore.  It then automaitically translates the Redux action types into Vuex mutations that trigger (aka commit) a dispatch to the corresponding Redux actions, thus updating the Redux state via reducers. 


## Prerequisites
Redux, Vue, Vuex

## Installation

```
npm install vuedeux
```

## API Reference

## Contributers
Nikol Marentes, David Marx, & Brian Rudloff 
