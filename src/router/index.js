import { createRouter, createWebHistory } from "vue-router";
import SenateState from "../views/SenateState.vue";

const routes = [
  {
    path: "/",
    name: "SenateState",
    component: SenateState,
  },
  {
    path: "/class",
    name: "SenateClass",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SenateClass.vue"),
  },
  {
    path: "/party",
    name: "SenateParty",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SenateParty.vue"),
  },
  {
    path: "/leaders",
    name: "SenateLeaders",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SenateLeaders.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
