import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth.js';
import LayoutFull from '../layouts/LayoutFull.vue';
import CrudJogador from '../views/cruds/CrudJogador.vue';
import CrudTime from '../views/cruds/CrudTime.vue';
import CrudRodada from '@/views/cruds/CrudRodada.vue';
import CrudJogo from '@/views/cruds/CrudJogo.vue';
import Tabela from '@/views/TabelaView.vue';
import TodosPosicaoView from '@/views/TodosPosicaoView.vue';
import Jogos from '@/views/JogosView.vue';
import JogoView from '@/views/JogoView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ChaveamentoView from '@/views/ChaveamentoView.vue';
import JogadorView from '@/views/JogadorView.vue';
import PerfilView from '@/views/PerfilView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LayoutFull',
      component: LayoutFull,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Tabela,
          props: true,
          // beforeEnter: (to, from, next) => {
          //   const authStore = useAuthStore();
          //   if (authStore.isLogged) {
          //     next();
          //   } else {
          //     next('/login'); 
          //   }
          // }
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
          path: '/time/:id',
          name: 'time',
          component: TodosPosicaoView,
          props: true
        },
        {
          path:'/jogador/:id',
          name: 'jogador',
          component: JogadorView,
          props: true,
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
          path: '/',
          name: 'login',
          component: LoginView,
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView,
        },
        {
          path: 'perfil',
          name: 'perfil',
          component: PerfilView,
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
