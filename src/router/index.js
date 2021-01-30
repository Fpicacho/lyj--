import Vue from "vue";
import VueRouter from "vue-router";
import _import from "./asyncRouter";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      name: "首页"
    },
    component: () => _import("Home")
  },
  {
    path: "/article_list/:id",
    meta: {
      name: "文章列表"
    },
    component: () => _import("template/article_list")
  },
  {
    path: "/article_detail/:id",
    meta: {
      name: "文章详情"
    },
    component: () => _import("template/article_detail")
  },
  {
    path: "/video/:id",
    meta: {
      name: "视频"
    },
    component: () => _import("template/myVideo")
  },
  {
    path: "/picture/:id",
    meta: {
      name: "图片"
    },
    component: () => _import("template/myPicture")
  },
  {
    path: "/subfield/:id",
    meta: {
      name: "分栏"
    },
    component: () => _import("template/subfield")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
