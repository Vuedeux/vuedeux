import Vue from 'vue';

import Vuex from 'vuex';
import { state, mutations } from './mutations';
import {localStoragePlugin} from './plugins';
import reduxPluginCreator from '../reduxPluginCreator';

import * as reduxActionTypes from './reduxactiontypes'
import{reduxStore} from './reduxstore';


// Make sure to call Vue.use(Vuex) first if using a module system
Vue.use(Vuex);

let vdx = reduxPluginCreator(reduxActionTypes, reduxStore)

//VUEX Module copying Redux
const vuex = new Vuex.Store({
  state,
  mutations,
  plugins: [localStoragePlugin, vdx ]
});

console.log("Vuex Store: ", vuex)
export default vuex

