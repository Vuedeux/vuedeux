import Vue from 'vue';
import Vuex from 'vuex';

// Import root VueX state and VueX mutations 
import { state, mutations } from './mutations';

// Import any desired plugins -- basic local storage plugin below
import { localStoragePlugin } from './plugins';

/* Import the vueduex pluginCreator and its dependent parameters:
  1. Your Redux action type constants
  2. Your Redux store
*/ 
import vdxPluginCreator from '../../vdxPluginCreator';
import * as reduxActionTypes from '../actions/reduxactiontypes';
import { reduxStore } from './reduxstore';

// Make sure to call Vue.use(Vuex) first if using a module system
Vue.use(Vuex);

let vdx = vdxPluginCreator(reduxStore, reduxActionTypes);

const store = new Vuex.Store({
  state,
  mutations,
  plugins: [localStoragePlugin, vdx ]
});

export default store

