import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    name: "mainRoute",
    component: () => import("./components/mainRoute.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;