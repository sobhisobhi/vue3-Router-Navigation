import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import HomePage from "@/components/Home.vue";
import LoginPage from "@/components/Login.vue";
import RegisterPage from "@/components/Register.vue";
import BoardAdmin from "@/components/BoardAdmin.vue";
import BoardUser from "./components/BoardUser.vue";
import BoardModerator from "@/components/BoardModerator.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld,
    name: "helloWorld",
  },
  /* {
    path: "/",
    component: HomePage,
    name: "home",
  }, */
  {
    path: "/home",
    component: HomePage,
    name: "home",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
  },
  {
    path: "/register",
    component: RegisterPage,
    name: "register",
  },
  {
    path: "/admin",
    component: BoardAdmin,
    name: "adminPage",
  },
  {
    path: "/user",
    component: BoardUser,
    name: "userPage",
  },
  {
    path: "/mod",
    component: BoardModerator,
    name: "moderatorPage",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/* router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "register", "/home"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
}); */
export default router;
