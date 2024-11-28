import { createRouter, createWebHistory } from 'vue-router';

// Example view components (replace these with your actual components)
import HomeView from '../views/homeView.vue'
import LogIn from '../views/Costumer/logIn.vue'
import RegiSter from '../views/Costumer/register.vue'
import chart from '../views/Product/chart.vue';

const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/login', name: 'LogIn', component: LogIn },
  { path: '/acc', name: 'Register', component: RegiSter },
  { path: '/chart', name: 'chart', component: chart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
