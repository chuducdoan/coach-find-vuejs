import { createRouter, createWebHistory } from "vue-router";
import CoachList from "./pages/coaches/CoachesList.vue";
import CoachDetail from "./pages/coaches/CoachDetail.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestsReceive from "./pages/requests/RequestsReceive.vue";
import NotFound from "./pages/NotFound.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import UserAuth from "./pages/auth/UserAuth.vue";
import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/coaches",
    },
    {
      path: "/coaches",
      component: CoachList,
    },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      props: true,
      children: [
        {
          path: "contact",
          component: ContactCoach,
        },
      ],
    },
    {
      path: "/register",
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: "/requests",
      component: RequestsReceive,
      meta: { requiresAuth: true },
    },
    {
      path: "/auth",
      component: UserAuth,
      meta: { requiresUnAuth: true },
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
    next("/auth");
  } else if (to.meta.requiresUnAuth && store.getters["auth/isAuthenticated"]) {
    next("/coaches");
  } else {
    next();
  }
});

export default router;
