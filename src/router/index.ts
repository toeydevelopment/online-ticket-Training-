import Vue from "vue";
import VueRouter from "vue-router";
import { RouteConfig } from "vue-router";
import Movies from "../pages/movies/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "movies",
    component: Movies
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
