import leadership from "../pages/leadership/index.vue"
const leadershipTeams = [
        {
            path: '/leadership',
            name:'LeaderShip',
            component: leadership,
        },
        {
            path: '/leadership/:slug',
            name:'LeaderShipMember',
            component: ()=> import('../pages/leadership/[slug].vue')
        },
]
export default leadershipTeams