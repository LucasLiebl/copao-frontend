import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '../layouts/LayoutFull.vue';
import CrudJogador from '../views/CrudJogador.vue';
import CrudTime from '../views/CrudTime.vue';
import TestConponent from '/home/joao/front-copao/copao-frontend/src/views/TestComponent.vue';
import TestA from '/home/joao/front-copao/copao-frontend/src/views/TestA.vue'
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
  ],
});

export default router;