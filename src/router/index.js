import { createRouter, createWebHistory } from 'vue-router';
import LayoutFull from '../layouts/LayoutFull.vue';
import CrudJogador from '../views/CrudJogador.vue';
import CrudTime from '../views/CrudTime.vue';
import CrudRodada from '@/views/CrudRodada.vue';
import CrudJogo from '@/views/CrudJogo.vue';
import Tabela from '@/views/TabelaView.vue';
import TestCard from '@/views/TestCard.vue';
import TodosPosicaoView from '@/views/TodosPosicaoView.vue';
import Jogos from '@/views/JogosView.vue';
import JogoView from '@/views/JogoView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ChaveamentoView from '@/views/ChaveamentoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LayoutFull',
      component: LayoutFull,
      children: [
        {
          path: 'tabela',
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
          path: '/time/:id',
          name: 'time',
          component: TodosPosicaoView,
          props: true
        },
        {
          path: 'jogos',
          name: 'jogos',
          component: Jogos,
        },
        {
          path: 'jogo/:id',
          name: 'jogo',
          component: JogoView,
          props: true,
        },
        {
          path: 'login',
          name: 'login',
          component: LoginView,
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView,
        },
        {
          path: 'chaveamento',
          name: 'chaveamento',
          component: ChaveamentoView,
        }
      ],
    },
  ],
});

export default router;
