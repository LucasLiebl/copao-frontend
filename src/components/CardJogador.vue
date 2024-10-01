<script setup>
import { onMounted,  } from 'vue'
import { useJogadorStore } from '@/stores'

const jogadorStore = useJogadorStore()

onMounted(() => {
  jogadorStore.getJogadores()
})

</script>

<template>
      <div class="loading" v-if="jogadorStore.isLoading">loading</div>
    <div v-for="jogador in jogadorStore.jogadores" :key="jogador" class="Card-Jogador">
    <div class="Nome-Jogador">
      <h1>{{jogador.numero}}</h1>
      <div class="Nome-Posicao">
        <h3>{{jogador.nome}}</h3>
        <h4>{{jogador.posicao}}</h4>
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
