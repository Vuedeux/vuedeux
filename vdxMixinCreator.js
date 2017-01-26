function vdxMixinCreator(actionCreators, reduxStore) {
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