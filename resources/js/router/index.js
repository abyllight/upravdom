import {createRouter, createWebHistory} from 'vue-router'
import Home from "../components/Home";
import Specialists from "../components/Specialists";
import Companies from "../components/Companies";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/services/:id/company/:c_id/specialists',
        name: 'Specialists',
        props: true,
        component: Specialists
    },
    {
        path: '/services/:id/companies',
        name: 'Companies',
        props: true,
        component: Companies
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior: function (to) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
                top: 500
            }
        }
    },
})

export default router
