<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/stores/auth'; 
import { useJogoStore } from '@/stores';
import TableHeadersEye from 'vue-material-design-icons/TableHeadersEye.vue';
import Soccer from 'vue-material-design-icons/Soccer.vue';

const authStore = useAuthStore();
const jogoStore = useJogoStore();

const isLogged = computed(() => authStore.isLogged);
const user = computed(() => authStore.user);

</script>

<template>
<header>
  <div class="logo">
      <router-link to="/"> <img src="https://i.ibb.co/9VfWVgh/COPAO-1.png" alt="logo"></router-link>
    </div>
    <nav class="nav-links">
      <router-link to="/tabela" 
      
      :class="{'nav-item nav-item-select': $route.path === '/tabela','nav-item': $route.path !== '/tabela'}">

      <TableHeadersEye :class="{'icon icon-select': $route.path === '/tabela','icon': $route.path !== '/tabela'}"></TableHeadersEye> 
      Classificação

      </router-link>

      <router-link to="/chaveamento"       
      
        :class="{'nav-item nav-item-select': $route.path === '/chaveamento','nav-item': $route.path !== '/chaveamento'}">
        
        <img src="https://i.ibb.co/MDkmH5j/Chavemante-Vector.png" alt="" class="icon"> Chaveamento
      
      </router-link>
          
      <router-link to="/jogos" :class="{'nav-item nav-item-select': $route.path === '/jogos','nav-item': $route.path !== '/jogos'}">
        
        <Soccer :class="{'icon icon-select': $route.path === '/jogos','icon': $route.path !== '/jogos'}"></Soccer> 
      Jogos</router-link>
    </nav>

    <nav v-if="authStore.isAdmin" class="nav-admin">
        <router-link to="/crudjogo" :class="{'nav-item nav-item-select': $route.path === '/crudjogo','nav-item': $route.path !== '/crudjogo'}">
          Crud Jogo
        </router-link>

        <router-link to="/crudtime" :class="{'nav-item nav-item-select': $route.path === '/crudtime','nav-item': $route.path !== '/crudtime'}">
          Crud Time
        </router-link>

        <router-link to="/crudjogador" :class="{'nav-item nav-item-select': $route.path === '/crudjogador','nav-item': $route.path !== '/crudjogador'}">
          Crud Jogador
        </router-link>

        <div class="nav-item" @click="jogoStore.gerarSemis()">
          Gerar Semis
        </div>

        <div class="nav-item" @click="jogoStore.gerarFinal()">
          Gerar Final
        </div>

      </nav>
    
    <router-link class="perfilBorder" v-if="isLogged" to="/perfil">
      <img :src=" user.foto ? user.foto : 'https://i.ibb.co/kmyjjy3/Default-pfp-svg.png'" alt="">
       </router-link>

    <router-link v-else to="/login" class="loginBorder">
      <img src="https://i.ibb.co/kmyjjy3/Default-pfp-svg.png" alt="">
      Sing In
    </router-link>
  </header>  
  </template>

<style scoped>
.perfilBorder{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #313131;
  border-radius: 50%;
  width: 3vw;
  height: 3vw;
  margin-left: auto;
  margin-right: 2%;
  
  img{
    border-radius: 50%;
    width: 80%;
  }
}
.loginBorder{
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #313131;
  width: 8%;
  height: 70%;
  border-radius: 20px;
  margin-left: auto;
  margin-right: 2%;
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  img{
    border-radius: 50%;
    width: 30%;
  }
}
header {
  display: flex;
  background-color: #1E1E1E;
  height: 111px;
  width: 100%;
  padding: 20px;
  align-items: center;
}

.logo img {
  width: 200px;
}
.icon{
  color: #757575;
  transition: all .2s; 
  display: flex;

}

.nav-links {
  display: flex;
  gap: 40px;
  margin-left: 40px;

}
.nav-admin{
  display: flex;
  gap: 40px;
  margin-left: auto;

}

.nav-item {
  color: #757575;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: all .1s;
}
.nav-item-select{
  color: white;
}
.icon-select{
  color: white;
  transition: all .2s;
}
.nav-item-select::after {
  content: '';
  position: absolute;
  bottom: -42px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  transition: all .2s;
}
</style>
