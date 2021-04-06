import { createRouter, createWebHashHistory } from "vue-router"

/* Layout */
import Layout from '@/layout/index'

const routes = [
  {
    path: '/login',
    component: () => import('@/pages/login/index'),
    hidden: true
  },
    {
        path: '/',
        component: Layout,
        meta:{
          name: 'Dashboard'
        },
        children: [
            {
              path: '/',
              breadcrumbName: 'Home',
              component: () => import(/* webpackChunkName: "page-home" */ '@/pages/Home')
            },
            {
                path: '/about',
                breadcrumbName: 'About',
                component: () => import(/* webpackChunkName: "page-about" */ '@/pages/About')
            }
        ]
    },
    {
        path: '/users',
        component: Layout,
        meta:{
          name: 'Users'
        },
        children: [
          {
            path: 'index',
            meta:{
              name: 'Users'
            },
            component: () => import(/* webpackChunkName: "page-users" */ '@/pages/users/Index')
          },
          {
            path: 'add',
            meta:{
              name: 'Add'
            },
            component: () => import(/* webpackChunkName: "page-users" */ '@/pages/users/Index')
          },
          {
            path: 'permission',
            meta:{
              name: 'Permission'
            },
            component: () => import(/* webpackChunkName: "page-users" */ '@/pages/users/Index'),
            children: [
              {
                path: 'roles',
                meta:{
                  name: 'Roles'
                },
                component: () => import(/* webpackChunkName: "page-users" */ '@/pages/users/Index')
              },
              {
                path: 'permissions',
                meta:{
                  name: 'Permissions'
                },
                component: () => import(/* webpackChunkName: "page-users" */ '@/pages/users/Index')
              }
            ]
          }
        ]
    },
    {
        path: '/404',
        breadcrumbName: '404',
        component: () => import('@/pages/errors/404')
    },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

export default router
