var isEqual = require('lodash.isequal');

function vdxPluginCreator(reduxStore, actionTypes){
  if (arguments.length < 2){
    throw new Error('vdxPluginCreator missing neccesary parameters.')
  }
  if (typeof actionTypes !== 'object'){
    throw new Error('vdxPluginCreator expects OBJECT with Action Type Constants as second parameter')
  }
  if (!reduxStore.dispatch){
    throw new Error('vdxPluginCreator expects Redux store with your root reducer as first parameter')
  }
  const reduxActions = {};
  const reduxMutations = {};
  Object.keys(actionTypes).forEach((type) => {
    reduxMutations[type] = (state, action) => {
      let newState = reduxStore.getState()
      Object.keys(newState).forEach((val) => {
        if (!isEqual(state[val], newState[val])) state[val] = newState[val]
      })
    }

    reduxActions[type] =  ({dispatch, commit}, action) => {
      reduxStore.dispatch(Object.assign({}, action, { type }));
      commit(type, action)
    }
  })

  return (store) => {
    store.registerModule('redux', {
      // ALT. state: {...reduxStore.getState()},
      state: Object.assign({}, reduxStore.getState()),
      mutations: reduxMutations,
      actions: reduxActions,
    });
  };
}

// export default vdxPluginCreator

module.exports = vdxPluginCreator