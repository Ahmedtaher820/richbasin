import news from "../pages/news/index.vue"

const newsRouter = [
        {
            path: '/news',
            name:'News',
            component: news,
        },
        {
            path: '/news/:slug',
            name:'newsArticle',
            component: ()=> import('../pages/news/[slug].vue')
        },
]
export default newsRouter