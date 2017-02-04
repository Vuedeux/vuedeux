const isEqual = require('lodash.isequal');

function vdxPluginCreator(reduxStore, actionTypes) {
  if (arguments.length < 2) {
    throw new Error('vdxPluginCreator missing neccesary parameters.');
  }
  if (!reduxStore.dispatch) {
    throw new Error('vdxPluginCreator expects your Redux store as first parameter');
  }
  if (typeof actionTypes !== 'object') {
    throw new Error('vdxPluginCreator expects OBJECT with Action Type Constants as second parameter');
  }

  const reduxActions = {};
  const reduxMutations = {};

  Object.keys(actionTypes).forEach((type) => {
    reduxMutations[type] = (state, action) => {
      const newState = reduxStore.getState();
      Object.keys(newState).forEach((val) => {
        // Below dirty check unnecessary? Listner already triggered
        if (!isEqual(state[val], newState[val])) {
          state[val] = newState[val];
        }
      });
    };

    reduxActions[type] = ({ dispatch, commit }, action) => {
      reduxStore.dispatch(Object.assign({}, action, { type }));
      commit(type, action);
    };
  });

  return (store) => {
    store.registerModule('redux', {
      state: Object.assign({}, reduxStore.getState()),
      mutations: reduxMutations,
      actions: reduxActions,
    });

    // VUEX dispatch monkeypatch to accept Redux Thunks
    const next = store.dispatch;
    store.dispatch = function (...args) {
      if (typeof args[0] === 'function') {
        args[0](next, store.state);
        // no way for vue to know what is going on within Redux thunk
        // reduxStore.dispatch(args[0], args[1])
      } else { 
        next(...args);
      }
    };

    function updateVuex() {
      store.state.redux = Object.assign({}, reduxStore.getState());
    }

    reduxStore.subscribe(updateVuex);
  };
}

module.exports = vdxPluginCreator;
