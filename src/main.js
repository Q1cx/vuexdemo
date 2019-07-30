import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

const store = new Vuex.Store({
  state: {
    count: 200,
    name: "abc"
  }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
