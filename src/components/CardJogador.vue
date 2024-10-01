<script setup></script>

<template>
  <div class="Card-Jogador">
    <img src="/home/joao/front-copao/copao-frontend/copao-frontend/public/Eversn.png" alt="" />
    <div class="Nome-Jogador">
      <h1>1</h1>
      <div class="Nome-Posicao">
        <h3>Everson</h3>
        <h4>Goleiro</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Card-Jogador {
  display: flex;
  margin: 50px;
  justify-content:center;
  flex-direction: column;
  text-align: center;
  background-color: #161616;
  width: 260px;
  height: 420;
  color: white;
  border-radius: 15px;

}
.Nome-Jogador {
  display: flex;
  justify-content: flex-start;
  background-color: #d9d9d9;
  width: 260px;
  height: 51px;
  border-end-end-radius: 15px;
  gap: 15px;
  padding-left: 20px;
  color: yellow;
}
.Nome-Posicao {
  display: flex;
  flex-direction: column;
  color: black;
}
img{
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
</style>
