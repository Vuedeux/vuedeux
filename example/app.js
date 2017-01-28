import 'babel-polyfill'
import Vue from 'vue'
import store from './store/vuex'
import App from './components/App.vue'
import{reduxStore} from './store/reduxstore'

import * as actionCreators from './actions/reduxactions'
import vdxMixinCreator from '../vdxMixinCreator'

const vdx = vdxMixinCreator(reduxStore, actionCreators);

export const app = new Vue({
  name: "app",
  store,
  el: '#app',
  data: {
    reduxActions: actionCreators
  },
  // mixins: [vdx],
  render: createElement => createElement(App),
});


