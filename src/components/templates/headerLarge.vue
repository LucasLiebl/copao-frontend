<script setup>
</script>

<template>
<header>
  <div class="logo">
      <img src="/home/joao.gomes/teste/copao-frontend/public/COPAO.png" alt="logo">
    </div>
    <nav class="nav-links">
      <router-link to="/TestA" 
      
      :class="{'nav-item nav-item-select': $route.path === '/TestA','nav-item': $route.path !== '/TestA'}">

      <img src="/home/joao.gomes/teste/copao-frontend/public/Classificacao.png" alt=""> Classificação

      </router-link>

      <router-link to="/chaveamento"       
      
        :class="{'nav-item nav-item-select': $route.path === '/chaveamento','nav-item': $route.path !== '/chaveamento'}">
        
        <img src="/home/joao.gomes/teste/copao-frontend/public/Chavemante.png" alt=""> Chaveamento
      
      </router-link>
          
      <router-link to="/jogos" class="nav-item"><img
          src="/home/joao.gomes/teste/copao-frontend/public/Classificacao.png" alt=""> Jogos</router-link>
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

.nav-links {
  display: flex;
  gap: 40px;
  margin-left: 40px;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
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
