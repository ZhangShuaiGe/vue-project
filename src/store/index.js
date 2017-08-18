import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    login: false,
    username: '',
  },
  mutations: {
    login (state,val){
      state.login = val;
    },
    username (state,val) {
      "use strict";
      state.username = val
    }
  },
  actions: {
    login (context,val) {
      context.commit('login', val);
    },
    username (context,val) {
      "use strict";
      context.commit('username',val);
    }
  }
})
export default store ;
