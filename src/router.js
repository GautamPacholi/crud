import { createRouter, createWebHistory } from 'vue-router'
import clientDetail from './components/clientDetail.vue'
import AddUser from './components/AddUser.vue'
import updateClient from './components/updateClient.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
       
        { path: '/', component: clientDetail },
        { path: '/Add', component: AddUser},
        { path: '/update/:data', name:'update',component: updateClient},
    ]
});

export default router;
