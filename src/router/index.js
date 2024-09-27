import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '../layouts/LayoutFull.vue';
import CrudJogador from '../views/CrudJogador.vue';
import CrudTime from '../views/CrudTime.vue';
import TestConponent from '../views/TestComponent.vue';
import TestA from '../views/TestA.vue';
import Chaveamento from '../views/Chaveamento.vue'

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
      ],
   
    },
    {
      path : '/test',
      name : '',
      component : TestConponent
    },
    {
      path : '/testA',
      name : '',
      component : TestA
    },
    {
      path : '/chaveamento',
      name : '',
      component : Chaveamento
    }
  ],
});

export default router;