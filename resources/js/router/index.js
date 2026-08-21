import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'

import AppLayout from '../layouts/AppLayout.vue'

import Dashboard from '../views/Dashboard.vue'

const routes = [

    /*
    |--------------------------------------------------------------------------
    | LOGIN
    |--------------------------------------------------------------------------
    */

    {
        path: '/login',

        name: 'login',

        component: Login
    },


    /*
    |--------------------------------------------------------------------------
    | SISTEMA
    |--------------------------------------------------------------------------
    */

    {
        path: '/',

        component: AppLayout,

        children: [

            {
                path: '',
                redirect: '/dashboard'
            },

            {
                path: '/dashboard',

                name: 'dashboard',

                component: Dashboard,

                meta: {
                    title: 'Inicio'
                }
            }

        ]
    }

]


const router = createRouter({

    history: createWebHistory(),

    routes

})


export default router
