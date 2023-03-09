import services from "../pages/services/index.vue"
import gas from "../pages/services/gas.vue"

const servicesRouter = [
    {
        path: '/services/:slug',
        name:'services',
        component: services,
        children: [
            {
                path: 'gas',
                name:'gas',
                component: gas
            },
            {
                path: '/epc',
                name:'epc',
                component: ()=> import('../pages/services/epc.vue')
            },
            {
                path: '/intervention',
                name:'intervention',
                component: ()=> import('../pages/services/intervention.vue')
            },
            {
                path: '/offshore',
                name:'gas',
                component: ()=> import('../pages/services/offshore.vue')
            },
        ]
    }
]
export default servicesRouter