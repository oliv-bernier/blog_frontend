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
    path: '/article',
    name: 'Article',
    component: () => import('../views/Article.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
