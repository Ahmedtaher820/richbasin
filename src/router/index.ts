import { createRouter, createWebHistory } from 'vue-router'
import VueRouter from "vue-router"
import Home from "../pages/index.vue"
import news from "./news"
import leadershipTeams from "./leadership"
import mainRoutes from "./main"
const baseRoutes: any = []
const routes = baseRoutes.concat(mainRoutes,news,leadershipTeams)
const router = createRouter({
    history:createWebHistory(),
    routes

})
export default router