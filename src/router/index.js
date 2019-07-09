import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Index from "../views/index/Index";

Vue.use(Router);

export default new Router({
  mode: 'history',  // 取消网址后缀的#
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path:"/index",
      name: "Index",
      component: Index
    }
  ]
});
