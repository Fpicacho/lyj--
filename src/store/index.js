import Vue from "vue";
import Vuex from "vuex";
import home from "@/store/modules/home";
import article from "@/store/modules/article";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isBanner: true,
    listId: null
  },
  mutations: {
    setBanner(state, id) {
      state.isBanner = false;
      state.listId = id;
    }
  },
  actions: {},
  modules: {
    home,
    article
  }
});
