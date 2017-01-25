import Vue from 'vue';

import Vuex from 'vuex';
import { state, mutations } from './mutations';
import {localStoragePlugin, createModule} from './plugins';
import reduxMutations from './reduxmutations';
import{reduxStore} from './reduxstore';
import { bindActionCreators } from 'redux';
import * as reduxactions from './reduxactions'


// Make sure to call Vue.use(Vuex) first if using a module system
Vue.use(Vuex);

const redux = {
  state: {...reduxStore.getState()},
  mutations: reduxMutations,
  // actions: bindActionCreators(reduxactions, reduxStore.dispatch),
}

//VUEX Module copying Redux
const vuex = new Vuex.Store({
 state,
 mutations,
 modules:{
    redux
  },
  plugins: [localStoragePlugin, createModule]
});

console.log("Vuex Store: ", vuex)
export default vuex

