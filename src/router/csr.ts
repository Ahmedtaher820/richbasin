const csr = [
        {
            path: '/csr',
            name:'csr',
            component: ()=> import('../pages/csr/index.vue'),
        },
        {
            path: '/csr/:slug',
            name:'csrPage',
            component: ()=> import('../pages/csr/[slug].vue')
        },
]
export default csr