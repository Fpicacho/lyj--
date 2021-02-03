import fetch from "@/api/fetch";

export default {
  getArticleList(params) {
    return fetch.get("/portal/index/portal_category", params);
  },
  getArticleDetails(params) {
    return fetch.get("/portal/index/portal_post", params);
  },
  getCategoryInfo(params) {
    return fetch.get("/portal/index/get_category_info", params);
  },
  portalCategory(params) {
    return fetch.get("/portal/index/portal_category", params);
  },
  slipde_page(params) {
    return fetch.get("/portal/index/slipde_page", params);
  }
};
