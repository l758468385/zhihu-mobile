import { lazy } from 'react';

import Home from '../views/Home';


const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: {
      title: '知乎日报-WebApp',
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: lazy(() => import('../views/Detail')),
    meta: {
      title: '知乎日报-详情',
    }
  },
  {
    path: '/personal',
    name: 'personal',
    component: lazy(() => import('../views/Personal')),
    meta: {
      title: '知乎日报-个人中心',
    }
  },
  {
    path: '/login',
    name: 'login',
    component: lazy(() => import('../views/Login')),
    meta: {
      title: '知乎日报-登录',
    }
  },
  {
    path: '/store',
    name: 'store',
    component: lazy(() => import('../views/Store')),
    meta: {
      title: '知乎日报-收藏',
    }
  },

  {
    path: '/update',
    name: 'update',
    component: lazy(() => import('../views/Update')),
    meta: {
      title: '知乎日报-收藏',
    }
  },
  {
    path: '/404',
    name: '404',
    component: lazy(() => import('../views/Page404')),
    meta: {
      title: '404',
    }
  },
  {
    path: '*',
    redirect: '/404',
  },


]

export default routes