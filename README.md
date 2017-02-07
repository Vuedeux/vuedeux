# vuedeux

<img src="https://github.com/dmrx/vuedoo/raw/master/example/assets/vuedeuxsmall.png">


## Documentation
https://vueduex.gitbooks.io/vuedeux-documentation/content/

## Synopsis 

An open-source lightweight utility layer that binds Redux to Vue by mapping your Redux store to a Vuex Module.
Vuedeux allows developers to reuse their pre-existing Redux state management libraries within Vue. It also allows developers who are simply more compfortable with Redux to utilize Vuex's tight integration with Vue without having to learn a new state management pattern.

Write Redux, dispatch actions to Vuex just as you would to Redux, and Vuedeux will do the rest.

## Motivation
Vuedeux answers our team's desire to create a simple way to re-use and share state-dependent code with Vuex. The decision to create Vuedeux, a compatibility layer between Vuex and Redux, was inspired by the split between the quickly growing Vue/Vuex community and the broad user-base and support for Redux's wide range of middlewares, tools, and bindings.

The Vuedeux team recognized that building a bridge between the Vue/Vuex ecosystem and Redux could bring a multitude of benefits and open access to Redux resources while maintaining the convenience and performance of Vuex as the Vue/Vuex community grows.

Every week there is a new frontend framework or a new Flux-based state management pattern.
These are exciting times, but it easily can also lead to "Javascript fatigue". 
Our goal is to encourage interoperabiliy and reusablility in our code bases. 

We love Vue & Vuex. We love the simplicity and the tight integration of the ecosystem.
We love Redux. We love that it's framework agnostic and has a rapidly growing community with a plethora of tools, middlewares, and bindings.
Our aim is to allow Redux developers to feel at home in Vue while providing all the conveniences and efficiencies of Vuex. 


## How It Works
The Vuedeux Plugin Creator takes your Redux action types and your Redux store, and then maps your Redux state and all associated actions to a Vuex module with equivalent actions and mutations, allowing you to easily reuse your existing Redux state store and dispatch to Vuex just like you would with Redux.

## Prerequisites
Redux, Vue, Vuex

## Installation
```
npm install vuedeux
```
## Getting Started


## API Reference

## Contributers
Nikol Marentes, David Marx, & Brian Rudloff 
