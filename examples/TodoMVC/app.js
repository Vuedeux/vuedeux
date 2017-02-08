import 'babel-polyfill';
import Vue from 'vue';
import store from './store/vuex';
import App from './components/app.vue';
import * as actionCreators from './actions/reduxactions';


export default new Vue({
  name: 'app',
  store,
  el: '#app',
  data: {
    reduxActions: actionCreators,
  },
  render: createElement => createElement(App),
});
