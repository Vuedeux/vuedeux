import * as actionTypes from './reduxactiontypes'
import {reduxStore} from './reduxstore'

const reduxMutations = {};

Object.keys(actionTypes).forEach((AC) => {
  reduxMutations[AC] =  (state, action) => { reduxStore.dispatch(action); };
});

export default reduxMutations;