import Vue from "vue";
import VueRouter from "vue-router";

let Cart = () => import("../views/cart/cart");
let Home = () => import("../views/home/home");
let Profile = () => import("../views/profile/profile");
let Category = () => import("../views/category/category");

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "",
      redirect: "/home 
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/category",
      component: Category
    },
    {
      path: "/profile",
      component: Profile
    },
     {
      path: "/cart",
      component:Cart
    },
    
  ],
  mode: "history"
});
