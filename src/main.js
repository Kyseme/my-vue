import Vue from 'vue'
import App from './App.vue';
import Parent from './pages/Parent.vue';
import ArrDeep from './test/ArrDeep.vue';
import Test from './pages/Test.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(Test),
}).$mount('#app');
