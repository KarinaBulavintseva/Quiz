import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main";
import Tests from "../pages/Tests";
import Result from "../pages/Result";
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    component: Main,
    props: { hash: "#about" },
  },
  {
    path: "/tests",
    name: "Tests",
    component: Tests,
  },
  {
    path: "/result",
    name: "Result",
    component: Result,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
