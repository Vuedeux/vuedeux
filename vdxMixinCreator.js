function vdxMixinCreator(reduxStore, actionCreators) {
  if (typeof actionCreators !== 'object'){
    throw new Error('vdxMixinCreator accepts OBJECT with Action Creators as its second parameter')
  }
  if (!reduxStore.subscribe){
    throw new Error('vdxMixinCreator expects Redux store as first parameter')
  }
  return {
    data() {
      return { reduxActions: null };
    }, 

    created() {
      this.reduxActions = actionCreators;
      // Subscribe to redux in order to update VueX redux module
      this.updateVuex();
      this.unsubscribe = reduxStore.subscribe(this.updateVuex);
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