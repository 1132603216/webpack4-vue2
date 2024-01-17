import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import "./config/rem"
import "./style/common.less"


// Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
