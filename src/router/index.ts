import { createRouter, createWebHistory } from 'vue-router'
import VueRouter from "vue-router"
import Home from "../pages/index.vue"
import newsRouter from "./news"
import leadershipTeams from "./leadership"
import services from "./services"
import mainRoutes from "./main"
const baseRoutes: any = []
const routes = baseRoutes.concat(mainRoutes,newsRouter,leadershipTeams,services)
const router = createRouter({
    history:createWebHistory(),
    routes

})
export default router