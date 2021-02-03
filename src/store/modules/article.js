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
  },
  async getCategoryInfo({ state, commit }, params) {
    let res = await article.getCategoryInfo(params);
    return res;
  },
  async portalCategory({ state, commit }, params) {
    let res = await article.portalCategory(params);
    return res;
  },
  async slipde_page({ state, commit }, params) {
    let res = await article.slipde_page(params);
    return res;
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
