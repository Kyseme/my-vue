import Vue from 'vue'
import App from './App.vue';
import Parent from './pages/Parent.vue';
import ArrDeep from './test/ArrDeep.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(Parent),
}).$mount('#app');
