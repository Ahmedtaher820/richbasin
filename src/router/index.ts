import { createRouter, createWebHistory } from 'vue-router'
import VueRouter from "vue-router"
import Home from "../pages/index.vue"
import newsRouter from "./news"
import leadershipTeams from "./leadership"
import projectsRoutes from "./projects"
import csr from "./csr"
import services from "./services"
import mainRoutes from "./main"
const baseRoutes: any = []
const routes = baseRoutes.concat(mainRoutes,newsRouter,leadershipTeams,services,projectsRoutes,csr)
const router = createRouter({
    history:createWebHistory(),
    routes

})
router.beforeEach(()=>{
    window.scrollTo(0, 0)
})
export default router