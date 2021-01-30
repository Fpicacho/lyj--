import home from "@/api/home";

const state = {
  listInfo: ""
};
const mutations = {
  SET_LIST(state, res) {
    state.listInfo = res;
  }
};
const actions = {
  async getNavList({ state, commit }, params) {
    let res = await home.getNavList(params);
    commit("SET_LIST", res.data);
    console.log(state.listInfo);
    return res;
  },
  async getBanner({ state, commit }, params) {
    let res = await home.getBanner(params);
    return res;
  },
  async getSubfield({ state, commit }, params) {
    let res = await home.getSubfield(params);
    return res;
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
