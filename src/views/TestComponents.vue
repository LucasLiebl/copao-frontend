<script setup></script>
<template>
    <div class="header">
      <div class="logo">
        <span >COPÃO</span>
      </div>
      <nav class="nav-links">
        <a href="#" class="nav-item" @click="setActive('classificacao')">📊 Classificação</a>
        <a href="#" class="nav-item" @click="setActive('chaveamento')">📅 Chaveamento</a>
        <a href="#" class="nav-item" @click="setActive('jogos')">⚽ Jogos</a>
      </nav>
    </div>
  </template>
  
  <style scoped>
.header {
  display: flex;
  background-color: #333;
  padding: 25px 20px;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.nav-links {
  display: flex;
  gap: 20px;
  margin-left: 80px;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 16px;
  position: relative;
  padding-bottom: 5px;
}

</style>