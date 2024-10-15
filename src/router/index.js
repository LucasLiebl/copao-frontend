import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '../layouts/LayoutFull.vue';
import CrudJogador from '../views/CrudJogador.vue';
import CrudTime from '../views/CrudTime.vue'
import TestComponents from '@/views/TestComponents.vue';
import Todos from '@/views/TodosPosicaoView.vue';
import Goleiros from '../components/GoleiroPosicao.vue';
import Fixos from '../components/FixoPosicao.vue';
import Alas from '../components/AlaPosicao.vue';
import Pivos from '../components/PivoPosicao.vue';


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
          path: '/todos/:id',
          name: 'todos',
          component: Todos,
          props: true
        },
      ],
    },
    {
      path : '/testComponent',
      name : '',
      component : TestComponents
    },
  ],
});

export default router;