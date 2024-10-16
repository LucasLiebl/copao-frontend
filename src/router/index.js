import { createRouter, createWebHistory } from 'vue-router';
import LayoutFull from '../layouts/LayoutFull.vue';
import CrudJogador from '../views/CrudJogador.vue';
import CrudTime from '../views/CrudTime.vue';
import CrudRodada from '@/views/CrudRodada.vue';
import CrudJogo from '@/views/CrudJogo.vue';
import Tabela from '@/views/Tabela.vue';
import TestCard from '@/views/TestCard.vue';
import TodosPosicaoView from '@/views/TodosPosicaoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LayoutFull',
      component: LayoutFull,
      children: [
        {
          path: '/',
          name: 'tabela',
          component: Tabela,
        },
        {
          path: 'crudjogador',
          name: 'CrudJogador',
          component: CrudJogador,
        },
        {
          path: 'crudtime',
          name: 'CrudTime',
          component: CrudTime,
        },
        {
          path: 'crudrodada',
          name: 'CrudRodada',
          component: CrudRodada,
        },
        {
          path: 'crudjogo',
          name: 'CrudJogo',
          component: CrudJogo,
        },
        {
          path: 'testCard',
          name: 'TestCard',
          component: TestCard,
        },
        {
          path: '/todos/:id',
          name: 'todos',
          component: TodosPosicaoView,
          props: true
        },
      ],
    },
  ],
});

export default router;
