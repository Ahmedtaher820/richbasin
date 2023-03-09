import { createRouter, createWebHistory } from 'vue-router'
import VueRouter from "vue-router"
import Home from "../pages/index.vue"
import servicesRouter from "./services"
import mainRoutes from "./main"
const baseRoutes: any = []
const routes = baseRoutes.concat(servicesRouter,mainRoutes)
const router = createRouter({
    history:createWebHistory(),
    routes

})
export default router