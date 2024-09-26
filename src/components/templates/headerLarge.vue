<script setup>
</script>

<template>
  <div class="header">
    <div class="logo">
      <img src="/home/joao/front-copao/copao-frontend/public/COPAO.png" alt="logo">
    </div>
    <nav class="nav-links">
      <router-link to="/TestA" class="nav-item"><img src="/home/joao/front-copao/copao-frontend/public/Classificacao.png" alt=""> Classificação</router-link>
      <router-link to="/chaveamento" class="nav-item"><img src="/home/joao/front-copao/copao-frontend/public/Chavemante.png" alt=""> Chaveamento</router-link>
      <router-link to="/jogos" class="nav-item"><img src="/home/joao/front-copao/copao-frontend/public/Vector.png" alt=""> Jogos</router-link>
    </nav>
  </div>
</template>

<style scoped>
.header {
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
  margin-left: 80px;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.nav-item:hover {
  color: #ddd;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -39px;
  left: 0;
  width: 0%;
  height: 4px;
  background-color: white;
  transition: width 0.3s ease-in-out;
  border-radius: 10px;
}

.nav-item:hover::after {
  width: 100%;
}
</style>
