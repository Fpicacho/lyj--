import fetch from "@/api/fetch";

export default {
  getNavList(params) {
    return fetch.post("/portal/index/nav_list", params);
  },
  getBanner(params) {
    return fetch.get("/portal/index/get_slide", params);
  },
  getSubfield(params) {
    return fetch.get("/portal/index/base_category", params);
  },
  getLists(params) {
    return fetch.get("/portal/index/lists", params);
  }
};
