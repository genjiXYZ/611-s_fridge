import Vue from "vue";
import VueRouter from "vue-router";

import Foods from "../views/Foods.vue";


// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }


const routes = [
  { path: "/", redirect: "/foods/fresher" },

  {
    path: "/foods/:position",
    name: "Foods",
    component: Foods,
    props: true,
    meta: {
      index: 0,
    },
  },

  {
    path: '/add',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Add.vue'),
    children: [
      {
      path:"/add",
      name: 'Add',
      component:()=> import('../components/CatergoryList.vue'),

      meta:{index:1,
        depth:0},
     
      },
      {
        path: '/add/:category',
        component: () => import('../components/AddFood.vue'),
        name: 'AddFood',
        props: true,
        meta:{index:1,
        depth:1},
      }
    ]
  },
  {
    path:"/charts",
    name: 'Charts',
    meta: {
      index: 2,
    },
    component:()=> import('../views/Charts'),
   
    },
  {
    path: "/about",
    name: "About",
    meta: {
      index: 3,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/sign/:status",
    name: "Sign",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  

  
];

const router = new VueRouter({
  mode: 'history',
  routes,
});


Vue.use(VueRouter);

export default router;
