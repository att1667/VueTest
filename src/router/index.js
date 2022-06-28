import { createWebHistory, createRouter } from "vue-router";
import Read from "@/components/Read";
import Create from "@/components/Create"
import Detail from "@/components/Detail"
import Modify from "@/components/Modify"
import Login from "@/components/Login"
import SignUp from "@/components/SignUp"
import FormTest from "@/views/Form.vue"


const routes = [
  {
    path: "/",
    name: "Read",
    component: Read,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/detail/:contentId",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/modify/:contentId",
    name: "Modify",
    component: Modify,
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/form",
    name: "FormTest",
    component: FormTest
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;