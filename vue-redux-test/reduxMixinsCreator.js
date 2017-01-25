var redux = require('redux');

function reduxMixinsCreator(actionCreators, reduxStore) {
  // CREATING A MIXIN
  return {
    data: function() {
      // initialize this aka VUE.state and Vue.actions
      return {
        actions: null,
      }
    },

    created: function() {
      // Bind the updateState method  // why was it prev this.updateState.bind(this)
      var updateState = this.updateState.bind(this)
      // Using .subscribe() on our store  -- updateState which sets Vue.state to current state whenever store is updated
      this.unsubscribe = reduxStore.subscribe(updateState)
      // set Vue.actions bound to this.store.dispatch
      this.reduxActions = actionCreators;
      // call updateState which will initialize Vue.state
      updateState();
    },

    destroyed: function() {
      // Unsubscribe the listed upon destroy -- neccesary?
      this.unsubscribe();
    },

    methods: {
      updateState: function() {
        this.$store.state.redux = {...reduxStore.getState()}

      },
    }
  }

}

module.exports = reduxMixinsCreator;
