/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';

// Import root VueX state and VueX mutations 
import { state, mutations } from './mutations';


/* Import the vueduex pluginCreator and its dependent parameters:
  1. Your Redux action type constants
  2. Your Redux store
*/ 
import { PluginCreator } from 'vuedeux';
import * as reduxActionTypes from '../redux/actions/reduxActionTypes';
import reduxStore from '../redux/store';

// Make sure to call Vue.use(Vuex) first if using a module system
Vue.use(Vuex);

// Set PluginCreator to a variable
let vdx = PluginCreator(reduxStore, reduxActionTypes);

//Include the above varable in your plugins below
const store = new Vuex.Store({
  state,
  mutations,
  plugins: [vdx]
});


export default store;
