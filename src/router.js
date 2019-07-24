import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import('./views/Hello.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path:'*',
      name:'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path:'/sign_up',
      name:'sign_up',
      component: () => import('./views/SignUp.vue'),
    },
    {
      path:'/boardWrite',
      name:'boardWrite',
      component: () => import('./views/BoardWrite.vue'),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//
//   if (requiresAuth && !currentUser) next('login');
//   else if (!requiresAuth && currentUser) next('home');
//   else next();
// });
//
// export default router;
