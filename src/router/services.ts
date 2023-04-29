import services from "../pages/services/index.vue"

const servicesRouter = [
        {
            path: '/services',
            name:'services',
            component: services,
        },
        {
            path: '/services/:slug',
            name:'newsArticle',
            component: ()=> import('../pages/services/[slug].vue')
        },
]
export default servicesRouter