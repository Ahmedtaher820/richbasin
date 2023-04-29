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
]
export default mainRoutes