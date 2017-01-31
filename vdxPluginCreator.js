const isEqual = require('lodash.isequal');

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
        // Below dirty check unnecessary? -- also most of the time the listener will have already changed state
        if (!isEqual(state[val], newState[val])) { 
          state[val] = newState[val]
          
        }
      })
    }

    reduxActions[type] =  ({dispatch, commit}, action) => {
      reduxStore.dispatch(Object.assign({}, action, { type }));
      commit(type, action);
    }
  })

  return (store) => {


    store.registerModule('redux', {
      // ALT. state: {...reduxStore.getState()},
      state: Object.assign({}, reduxStore.getState()),
      mutations: reduxMutations,
      actions: reduxActions,
    });

    //VUEX dispatch monkeypatch
    let next = store.dispatch;
    store.dispatch = function(...args){
      if(typeof args[0] === 'function'){
        args[0](next, store.state)
        // reduxStore.dispatch(args[0], args[1]) // no way for vue to know what is going on within Redux thunk
      }
      else next(...args)
    }

    function updateVuex() {
      console.log("I run")
      store.state.redux = Object.assign({}, reduxStore.getState());
    }
    
    reduxStore.subscribe(updateVuex);

  };
}

// export default vdxPluginCreator

module.exports = vdxPluginCreator