/* eslint-disable */

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import photoGrid from './components/Photogrid';
import single from './components/Single';

import store from './vuex/vuex';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: photoGrid },
  {path: '/:id', component: single} 
]

const router = new VueRouter({
  routes
});

const app = new Vue({
  router,
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
}).$mount('#app');
