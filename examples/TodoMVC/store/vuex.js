import Vue from 'vue';
import Vuex from 'vuex';
import { state, mutations } from './mutations';
import { localStoragePlugin } from './plugins';

import vdxPluginCreator from '../../../vdxPluginCreator';
import * as reduxActionTypes from '../actions/reduxactiontypes';
import reduxStore from './reduxStore';

const vdx = vdxPluginCreator(reduxStore, reduxActionTypes);

// Make sure to call Vue.use(Vuex) first if you're using a Vue module build system
Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  plugins: [localStoragePlugin, vdx],
});

export default store;
