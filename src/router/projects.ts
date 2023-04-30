
const projectsRoutes =  [
    {
        name: 'projects',
        path: '/projects',
        component: ()=> import('../pages/projects/index.vue')
    },
    {
        name: 'project',
        path: '/projects/:slug',
        component: ()=> import('../pages/projects/[slug].vue')
    },
]
export default projectsRoutes