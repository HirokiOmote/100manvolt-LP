// import path from 'path';
import Vue from 'vue';
import Router from 'vue-router';
import Top from 'pages/TopPage';
import Timesale from 'pages/Timesale';
import Specialsale from 'pages/Specialsale';

Vue.use(Router);

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top,
    },
    {
      path: '/timesale/',
      name: 'Timesale',
      component: Timesale,
    },
    {
      path: '/specialsale/',
      name: 'Specialsale',
      component: Specialsale,
    },
  ],
});
