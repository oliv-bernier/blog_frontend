import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Feed',
    component: () => import('../views/Feed.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/Article.vue'),
  },
  {
    path: '/feed/:id',
    name: 'FeedByCategory',
    component: () => import('../views/Feed.vue'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.name;
  next();
});

export default router;
