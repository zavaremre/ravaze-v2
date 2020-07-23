 // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '../../views/index'
import VueFirestore from 'vue-firestore';

// turns off the 'You are running Vue in development mode.' msg
Vue.config.productionTip = false;

Vue.use(VueFirestore);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
})


