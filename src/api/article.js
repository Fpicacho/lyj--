import fetch from "@/api/fetch";

export default {
  getArticleList(params) {
    return fetch.get("/api/portal/index/portal_category", params);
  },
  getArticleDetails(params) {
    return fetch.get("/api/portal/index/portal_post", params);
  }
};
