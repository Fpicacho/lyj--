import fetch from "@/api/fetch";

export default {
  getNavList(params) {
    return fetch.post("/api/portal/index/nav_list", params);
  },
  getBanner(params) {
    return fetch.get("/api/portal/index/get_slide", params);
  },
  getSubfield(params) {
    return fetch.get("/api/portal/index/base_category", params);
  }
};
