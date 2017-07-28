function vdxPluginCreator(reduxStore, actionTypes, actionCreators) {
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
  const isCreator = typeof actionCreators == 'object';

  Object.keys(actionTypes).forEach((type) => {
    let currentType = type;


    reduxMutations[type] = (state, action) => { }; // Register Action

    if (isCreator) {
      Object.keys(actionCreators).forEach((actionCreator) => {
        if (actionCreators[actionCreator].toString().includes(type)) {
          currentType = actionCreator;
        };
      });
    };

    reduxActions[currentType] = function({ dispatch, commit }, action) {
      const args_ = arguments
      const [temp, ...newArguments] = args_;
      const _args_ = isCreator ? actionCreators[currentType](...newArguments) : Object.assign({}, action, { type });

      reduxStore.dispatch(_args_);
      commit(type, _args_);
    };
  });

  return (store) => {
    store.registerModule('redux', {
      state: Object.assign({}, reduxStore.getState()),
      mutations: reduxMutations,
      actions: reduxActions,
    });

    const next = store.dispatch;
    store.dispatch = function (...args) {
      if (typeof args[0] === 'function') {
        args[0](next, store.state, ...args.slice(1));
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
