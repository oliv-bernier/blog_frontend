import Vue from 'vue';
import VueRouter from 'vue-router';

import About from '../views/About.vue';
import Article from '../views/Article.vue';
import Categories from '../components/Categories.vue';
import Hello from '../components/Hello.vue';
import Feed from '../views/Feed.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Feed',
    components: {
      default: Feed,
      hello: Hello,
      nav: Categories,
    },
    props: {
      nav: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: About,
    },
  },
  {
    path: '/article/:id',
    name: 'Article',
    components: {
      default: Article,
      hello: Hello,
      nav: Categories,
    },
    props: {
      nav: true,
    },
  },
  {
    path: '/feed/:name',
    name: 'FeedByCategory',
    components: {
      default: Feed,
      hello: Hello,
      nav: Categories,
    },
    props: {
      nav: true,
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
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
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
