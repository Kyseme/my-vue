import Vue from 'vue'
import App from './App.vue';
import ArrDeep from './test/ArrDeep.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(ArrDeep),
}).$mount('#app')
