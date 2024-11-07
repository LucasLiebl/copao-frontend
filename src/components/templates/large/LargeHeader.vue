<script setup>
</script>

<template>
<header>
  <div class="logo">
      <router-link to="/tabela"> <img src="https://i.ibb.co/9VfWVgh/COPAO-1.png" alt="logo"></router-link>
    </div>
    <nav class="nav-links">
      <router-link to="/tabela" 
      
      :class="{'nav-item nav-item-select': $route.path === '/tabela','nav-item': $route.path !== '/tabela'}">

      <img src="https://i.ibb.co/BNTvDmn/Classificacao-Vector.png" alt="" class="icon"> Classificação

      </router-link>

      <router-link to="/chaveamento"       
      
        :class="{'nav-item nav-item-select': $route.path === '/chaveamento','nav-item': $route.path !== '/chaveamento'}">
        
        <img src="https://i.ibb.co/MDkmH5j/Chavemante-Vector.png" alt="" class="icon"> Chaveamento
      
      </router-link>
          
      <router-link to="/jogos" :class="{'nav-item nav-item-select': $route.path === '/jogos','nav-item': $route.path !== '/jogos'}"><img
          src="https://i.ibb.co/bNk0pxT/Vector.png" alt="" class="icon"> Jogos</router-link>
    </nav>
  </header>  
  </template>

<style scoped>
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
}

.nav-links {
  display: flex;
  gap: 40px;
  margin-left: 40px;
}

.nav-item {
  color: #757575;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all .1s;
}
.nav-item-select{
  color: white;
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
