function reduxPluginCreator(actionTypes, reduxStore){
  if (arguments.length < 2){
    throw new Error('VdxPluginCreator missing neccesary parameters.')
  }
  if (typeof actionTypes !== 'object'){
    throw new Error('VdxPluginCreator expects OBJECT with Action Type Constants as first parameter')
  }
  if (!reduxStore.dispatch){
    throw new Error('VdxPluginCreator expects Redux store with your root reducer as second parameter')
  }
  const reduxMutations = {};
  Object.keys(actionTypes).forEach((type) => {
    reduxMutations[type] =  (state, action) => {
      console.log(state, action)
      reduxStore.dispatch({type:type, ...action}); 
    };
  });
  return (store) => {
    store.registerModule('redux', {
      state: {...reduxStore.getState()},
      mutations: reduxMutations,
    });
  };
}


export default reduxPluginCreator