import Vue from 'vue'
import App from './App.vue';
// import Parent from './pages/Parent.vue';
// import ArrDeep from './test/ArrDeep.vue';
import Tables from './pages/Tables.vue';
import VueRouter from 'vue-router';
import {routes} from './router.js';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Element);
const router= new VueRouter({
  routes
});

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app');


new Vue({
  router,
  render: h => h(Tables),
}).$mount('#app');