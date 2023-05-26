import { createRouter, createWebHistory } from "vue-router";

import index from '../components/users/index.vue';
import Create from '../components/users/create.vue';
import Update from '../components/users/edit.vue';

import NotFound from '../components/NotFound.vue';

const routes = [
    {
        path: '/',
        component: index
    },
    {
        path: '/create',
        component: Create
    },
    {
        path: '/edit/:id',
        component: Update
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
