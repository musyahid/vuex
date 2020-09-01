import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.view";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "Home" */ "@/views/Home/Index"),
    name: "home",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    component: () => import("@/views/Auth/Register"),
  },
  {
    path: "/products",
    
    components: {
      default: () =>
        import(/* webpackChunkName: "Product" */ "@/views/Products/Index"),
    },
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "Product-list" */ "@/views/Products/ProductList"),
      },
      {
        path: "detail/:id",
        props: true,
        name: "productDetail",
        component: () =>
          import(/* webpackChunkName: "Product-list" */ "@/views/Products/ProductDetail"),
      },
    ],
  },
  {
    path: "/products-in",
    component: () =>
      import(/* webpackChunkName: "Home" */ "@/views/Products/ProductInList"),
    name: "productIn",
  },
  {
    path: "/products-out",
    component: () =>
      import(/* webpackChunkName: "Home" */ "@/views/Products/ProductOutList"),
    name: "productOut",
  },
  {
    path: "/users",
    components: {
      default: () =>
        import(/* webpackChunkName: "User" */ "@/views/Users/Index"),
    },
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "User-list" */ "@/views/Users/List"),
      },
      {
        path: "detail/:id",
        props: true,
        name: "userDetail",
        component: () =>
          import(/* webpackChunkName: "User-list" */ "@/views/Users/Detail"),
      },
    ],
  }
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  // if route if requiresAuth
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // if don't have token
    if (localStorage.getItem("token") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      // check by role
      let user = JSON.parse(localStorage.getItem("user"));
      if (to.matched.some((record) => record.meta.is_admin)) {
        if (user.role == "super_admin") {
          next();
        } else {
          alert("anda bukan super admin");
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          next("/login");
        }
      } else {
        next();
      }
      next();
    }
  } else {
    next();
  }
});

export default router;
