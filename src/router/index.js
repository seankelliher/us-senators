import { createRouter, createWebHistory } from "vue-router";
import SenateState from "../views/SenateState.vue";
import SenateClass from "../views/SenateClass.vue";
import SenateParty from "../views/SenateParty.vue";
import SenateLeaders from "../views/SenateLeaders.vue";
import SenateDetail from "../views/SenateDetail.vue";
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
        path: "/detail/:portrait",
        name: "SenateDetail",
        component: SenateDetail,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () => import("../views/SenateDetail.vue"),
        children: [
            {
                path: "details/wi-tammy-baldwin",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/wy-john-barrasso",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/co-michael-bennet",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/tn-marsha-blackburn",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ct-richard-blumenthal",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/mo-roy-blunt",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/nj-cory-booker",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ar-john-boozman",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/in-mike-braun",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/oh-sherrod-brown",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/nc-richard-burr",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/wa-maria-cantwell",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/wv-shelley-moore-capito",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/md-benjamin-cardin",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/de-thomas-carper",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/pa-robert-casey",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/la-bill-cassidy",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/me-susan-collins",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/de-christopher-coons",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/tx-john-cornyn",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/nv-catherine-cortez-masto",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ar-tom-cotton",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/nd-kevin-cramer",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/id-mike-crapo",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/tx-ted-cruz",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/mt-steve-daines",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/il-tammy-duckworth",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/il-richard-durbin",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ia-joni-ernst",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ca-dianne-feinstein",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ne-deb-fischer",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ny-kirsten-gillibrand",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/sc-lindsey-graham",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ia-chuck-grassley",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/tn-bill-hagerty",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/nh-maggie-hassan",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/mo-josh-hawley",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/nm-martin-heinrich",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/co-john-hickenlooper",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/hi-mazie-hirono",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/nd-john-hoeven",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ms-cindy-hyde-smith",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ok-james-inhofe",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/wi-ron-johnson",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/va-tim-kaine",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/az-mark-kelly",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/la-john-kennedy",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/me-angus-king",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/mn-amy-klobuchar",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ok-james-lankford",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/vt-patrick-leahy",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ut-mike-lee",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/nm-ben-ray-lujan",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/wy-cynthia-lummis",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/wv-joe-manchin",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ma-ed-markey",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ks-roger-marshall",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ky-mitch-mcconnell",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/nj-robert-menendez",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/or-jeff-merkley",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ks-jerry-moran",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ak-lisa-murkowski",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ct-christopher-murphy",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/wa-patty-murray",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ga-jon-ossoff",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ca-alex-padilla",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ky-rand-paul",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/mi-gary-peters",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/oh-rob-portman",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ri-jack-reed",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/id-james-risch",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ut-mitt-romney",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/nv-jacky-rosen",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/sd-mike-rounds",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/fl-marco-rubio",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/vt-bernie-sanders",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ne-ben-sasse",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/hi-brian-schatz",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ny-chuck-schumer",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/fl-rick-scott",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/sc-tim-scott",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/nh-jeanne-shaheen",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/al-richard-shelby",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/az-kyrsten-sinema",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/mn-tina-smith",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/mi-debbie-stabenow",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ak-dan-sullivan",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/mt-jon-tester",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/sd-john-thune",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/nc-thom-tillis",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/pa-pat-toomey",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/al-tommy-tuberville",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/md-chris-van-hollen",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/va-mark-warner",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ga-raphael-warnock",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ma-elizabeth-warren",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ri-sheldon-whitehouse",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/ms-roger-wicker",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/or-ron-wyden",
                name: "SenateDetail",
                component: SenateDetail,
            },
            {
                path: "details/in-todd-young",
                name: "SenateDetail",
                component: SenateDetail,
            },
        ],
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
