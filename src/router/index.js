import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login';
import Home from '@/components/home';
import Category from '@/components/home/movie-category';
import Grid from '@/components/home/movie-grid';
import Detail from '@/components/home/movie-detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Category',
          component: Category
        },
        {
          path: 'grid/:list',
          name: 'Grid',
          component: Grid
        },
        {
          path: 'detail/:id',
          name: 'Detail',
          component: Detail
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});
