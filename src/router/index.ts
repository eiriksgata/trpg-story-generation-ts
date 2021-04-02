import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// error page components
const PAGE_403 = () => import('@/views/error/Page403.vue');
const PAGE_404 = () => import('@/views/error/Page404.vue');
const PAGE_500 = () => import('@/views/error/Page500.vue');

//login commpoents
const LOGIN = () => import('@/views/login/Login.vue');

//backend commpoents
const ABOUT = () => import('@/views/about/About.vue');
const DASHBOARD = () => import('@/views/navbar/Dashboard.vue');

const STORYVIEW = () => import('@/views/page/StoryView.vue');

//device 


const routes = [
  // error pages
  { path: '/error/403', name: 'page403', component: PAGE_403 },
  { path: '/error/404', name: 'page404', component: PAGE_404 },
  { path: '/error/500', name: 'page500', component: PAGE_500 },

  { path: '/', name: 'Index', component: DASHBOARD },

  { path: '/about', name: 'About', component: ABOUT },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DASHBOARD,
    children: [
      { path: '/story', name: 'StoryView', component: STORYVIEW }
    ]
  },

  // catch all
  { path: '*', redirect: { name: 'page404' } }
]

const router = new VueRouter({
  routes
})

export default router
