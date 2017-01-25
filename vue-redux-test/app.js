import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import App from './components/App.vue'
import{reduxStore} from './store/reduxstore'
import * as actionCreators from './store/reduxactions'
import reduxMixinsCreator from './reduxMixinsCreator'


const reduxMixins = reduxMixinsCreator(actionCreators, reduxStore)

let app = new Vue({
  // provide the store using the "store" option.
  // this will inject the store instance to all child components 
  // and will be available on them as this.$store
  name: "app",
  store,
  el: '#app',
  mixins: [reduxMixins],
  // data: {
  //   reduxActions: actionCreators,
  //   // reduxStore
  // },
  // Render overwrites the template syntax of  {{greet}} on index.html
  render: createElement => createElement(App),
});
