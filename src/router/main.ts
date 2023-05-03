import Home from "../pages/index.vue"

const mainRoutes =  [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contact',
        path: '/contact',
        component: () => import('../pages/contact.vue')
    },
    {
        name: 'hse',
        path: '/health-safety-and-environment-hse',
        component: () => import('../pages/hse.vue')
    },
    {
        name: 'vision',
        path: '/vision',
        component: () => import('../pages/vision.vue')
    },
    {
        name: 'mission',
        path: '/mission',
        component: () => import('../pages/mission.vue')
    },
    {
        name: 'value',
        path: '/value',
        component: () => import('../pages/value.vue')
    },
    {
        name: 'partnerships',
        path: '/partnerships',
        component: () => import('../pages/partnerships.vue')
    },
    {
        name: 'career',
        path: '/career',
        component: () => import('../pages/career.vue')
    },
]
export default mainRoutes