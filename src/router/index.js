import { createRouter, createWebHistory } from "vue-router";
import SenateState from "../views/SenateState.vue";
import SenateClass from "../views/SenateClass.vue";
import SenateParty from "../views/SenateParty.vue";
import SenateLeaders from "../views/SenateLeaders.vue";
import NotFound from "../views/NotFound.vue";
import NProgress from "nprogress";

const routes = [
    {
        path: "/",
        name: "SenateState",
        component: SenateState,
    },
    {
        path: "/class",
        name: "SenateClass",
        component: SenateClass,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () => import("../views/SenateClass.vue"),
    },
    {
        path: "/party",
        name: "SenateParty",
        component: SenateParty,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () => import("../views/SenateParty.vue"),
    },
    {
        path: "/leaders",
        name: "SenateLeaders",
        component: SenateLeaders,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () => import("../views/SenateLeaders.vue"),
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(() => {
    NProgress.start();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
