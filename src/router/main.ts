import Home from "../pages/index.vue"

const mainRoutes =  [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'Contact',
        path: '/contact',
        component: () => import('../pages/contact.vue')
    },
    {
        name: 'csr',
        path: '/csr',
        component: () => import('../pages/csr.vue')
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
]
export default mainRoutes