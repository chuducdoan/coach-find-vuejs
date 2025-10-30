import { createRouter, createWebHistory } from "vue-router";
import CoachList from "./pages/coaches/CoachesList.vue";
import CoachDetail from "./pages/coaches/CoachDetail.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestsReceive from "./pages/requests/RequestsReceive.vue";
import NotFound from "./pages/NotFound.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";

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
    },
    {
      path: "/requests",
      component: RequestsReceive,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
export default router;
