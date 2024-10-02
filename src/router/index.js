import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '../layouts/LayoutFull.vue';
import CrudJogador from '../views/CrudJogador.vue';
import CrudTime from '../views/CrudTime.vue'
import TestComponents from '@/views/TestComponents.vue';
import Tabela from '@/views/Tabela.vue';
import TestCard from '@/views/TestCard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path :'/crudjogador',
          name: '',
          component : CrudJogador,
        },
        {
          path : '/crudtime',
          name : '',
          component : CrudTime
        },
        {
          path : '/testCard',
          name : '',
          component : TestCard
        },
      ],
    },
    {
      path : '/testComponent',
      name : '',
      component : TestComponents
    },
    {
      path : '/test',
      name : '',
      component : Tabela
    }
  ],
});

export default router;