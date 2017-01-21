import Vue from 'vue';
import Vuex from 'vuex';
import { state, mutations } from './mutations';
import plugins from './plugins';

// Make sure to call Vue.use(Vuex) first if using a module system

Vue.use(Vuex);


export default new Vuex.Store({
  state,
  mutations,
  plugins,
});

