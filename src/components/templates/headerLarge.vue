<script setup>
</script>

<template>
  <div class="header">
    <div class="logo">
      <img src="/home/joao/front-copao/copao-frontend/public/COPAO.png" alt="logo">
    </div>
    <nav class="nav-links">
      <router-link to="/TestA" class="nav-item">📊 Classificação</router-link>
      <router-link to="/chaveamento" class="nav-item">📅 Chaveamento</router-link>
      <router-link to="/jogos" class="nav-item">⚽ Jogos</router-link>
    </nav>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  background-color: #1E1E1E;
  padding: 30px 20px;
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
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

.nav-item:hover::after {
  width: 100%;
}
</style>
