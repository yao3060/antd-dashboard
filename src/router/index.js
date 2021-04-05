import { createRouter, createWebHashHistory } from "vue-router";

/* Layout */
import Layout from '@/layout/index'

const routes = [
    { 
        path: '/', 
        component: Layout,
        children: [
            {
              path: '/',
              component: () => import(/* webpackChunkName: "page-home" */ '@/pages/Home') 
            },
            {
                path: '/about',
                component: () => import(/* webpackChunkName: "page-about" */ '@/pages/About') 
            }
        ]
    },
    { 
        path: '/404', 
        component: () => import('@/pages/errors/404')
    },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

export default router