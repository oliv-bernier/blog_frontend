import Vue from 'vue';
import VueSanitize from 'vue-sanitize';
import App from './App.vue';
import router from './router';

Vue.use(VueSanitize);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
