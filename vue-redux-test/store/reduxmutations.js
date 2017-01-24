import * as actionTypes from './reduxactiontypes'
import {reduxStore} from './reduxstore'

const mutations = {};

Object.keys(actionTypes).forEach((AC) => {
  mutations[AC] =  (state, action) => { reduxStore.dispatch(action); };
  console.log("AM I MAKING MORE COMMMYS?", mutations)
});

export default mutations;