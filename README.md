# vuedeux

![alt tag](https://github.com/brianrudloff/vuedoo/blob/styleupdate/dollsmall.png)

## Synopsis 

An open-source lightweight utility layer that binds Redux to Vuex, allowing applications to incorporate Vue components while enjoying the benefits of both Redux and Vuex state management systems.

## Motivation
Knowing Redux has a broad user-base and support with a wide range of middlewares, tools, and bindings, the Vuedeux team set out to build a bridge to these benefits from the Vue-Vuex interface. By creating a compatibility layer between Redux and VueX we open access to Redux resources while maintaining the convenience and performance of VueX which has been designed from the ground up for use in Vue.  With the Vuedeux binding we aimed to create a simple way to re-use state-dependent code and deploy framework agnostic interfaces in highly-customizable and large-scale applications. 

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
