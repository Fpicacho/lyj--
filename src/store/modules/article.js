import article from "@/api/article";

const state = {};
const mutations = {};
const actions = {
  async getArticleList({ state, commit }, params) {
    let res = await article.getArticleList(params);
    return res;
  },
  async getArticleDetails({ state, commit }, params) {
    let res = await article.getArticleDetails(params);
    return res;
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
