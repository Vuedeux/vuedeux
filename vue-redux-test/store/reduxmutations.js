import * as actionTypes from './reduxactiontypes'
import {reduxStore} from './reduxstore'

const mutations = {};

Object.keys(actionTypes).forEach((AC) => {
  mutations[AC] =  (state, action) => { reduxStore.dispatch(action); };
});

export default mutations;