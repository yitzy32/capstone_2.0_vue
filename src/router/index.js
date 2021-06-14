import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import PantryItemsIndex from "../views/PantryItemsIndex.vue";
import PantryItemNew from "../views/PantryItemNew.vue";
import SearchRecipes from "../views/SearchRecipes.vue";
import MyRecipes from "../views/MyRecipes.vue";
import ShowMyRecipe from "../views/ShowMyRecipe.vue";
import ShoppingList from "../views/ShoppingList.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  },
  {
    path: "/search_recipes",
    name: "search_recipes",
    component: SearchRecipes
  },
  {
    path: "/pantry_items",
    name: "pantry_items",
    component: PantryItemsIndex
  },
  {
    path: "/pantry_items/new",
    name: "pantryItemsNew",
    component: PantryItemNew
  },
  {
    path: "/recipes",
    name: "recipes",
    component: MyRecipes
  },
  {
    path: "/recipes/:id",
    name: "my-recipes-show",
    component: ShowMyRecipe
  },
  {
    path: "/shopping_list",
    name: "shopping_list",
    component: ShoppingList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
