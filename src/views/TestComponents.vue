<script setup>
import CardJogador from '@/components/CardJogador.vue';

import { onMounted } from 'vue'
import { useJogadorStore } from '@/stores'

const jogadorStore = useJogadorStore()

onMounted(() => {
  jogadorStore.getJogadores()
})

console.log(jogadorStore.jogadores)
</script>
<template>
    <div v-for="jogador in jogadorStore.jogadores" :key="jogador.id">
    <div><CardJogador :nome="jogador.nome" :numero="jogador.numero" :posicao="jogador.posicao"/></div>
    </div>
  </template>
  
  <style scoped>

</style>