import HomeView from './components/HomeView.vue';
import SignUp from './components/SignUp.vue';
import { createRouter, createWebHistory} from 'vue-router';
import LoginView from './components/LoginView.vue';
import AddPage from './components/AddPage.vue';
import UpdateView from './components/UpdateView.vue';

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/sign-up',   
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/login',   
        name: 'LoginView',
        component: LoginView
    },
    {
        path: '/update/:id',   
        name: 'UpdateView',
        component: UpdateView
    },
    {
        path: '/add',   
        name: 'AddPage',
        component: AddPage
    },
];
    const router = createRouter({
        history: createWebHistory(),
        routes,     
    });

export default router;