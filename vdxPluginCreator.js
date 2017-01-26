
function vdxPluginCreator(actionTypes, reduxStore){
  if (arguments.length < 2){
    throw new Error('vdxPluginCreator missing neccesary parameters.')
  }
  if (typeof actionTypes !== 'object'){
    throw new Error('vdxPluginCreator expects OBJECT with Action Type Constants as first parameter')
  }
  if (!reduxStore.dispatch){
    throw new Error('vdxPluginCreator expects Redux store with your root reducer as second parameter')
  }
  const reduxMutations = {};
  Object.keys(actionTypes).forEach((type) => {
    reduxMutations[type] =  (state, action) => {
      console.log(state, action)
      // ALT. reduxStore.dispatch({type:type, ...action}); 
      reduxStore.dispatch(Object.assign({}, action, {type}));
    };
  });
  return (store) => {
    store.registerModule('redux', {
      // ALT. state: {...reduxStore.getState()},
      state: Object.assign({}, reduxStore.getState()),
      mutations: reduxMutations,
    });
  };
}

// export default vdxPluginCreator

module.exports = vdxPluginCreator