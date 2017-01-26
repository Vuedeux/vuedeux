function vdxMixinCreator(actionCreators, reduxStore) {
  if (arguments.length < 2){
    throw new Error('vdxMixinCreator missing neccesary parameters.')
  }
  if (typeof actionCreators !== 'object'){
    throw new Error('vdxMixinCreator expects OBJECT with Action Creators as its first parameter')
  }
  if (!reduxStore.subscribe){
    throw new Error('vdxMixinCreator expects Redux store as second parameter')
  }
  return {
    data() {
      return { actions: null };
    }, 

    created() {
      this.reduxActions = actionCreators;
      // Subscribe to redux in order to update VueX redux module
      this.unsubscribe = reduxStore.subscribe(this.updateVuex);
      this.updateVuex();
    },

    beforeDestroy() {
      this.unsubscribe();
    },

    methods: {
      updateVuex: function () {
        // ALT. this.$store.state.redux = { ...reduxStore.getState() };
        this.$store.state.redux = Object.assign({}, reduxStore.getState());
      },
    },
  };
}

module.exports = vdxMixinCreator