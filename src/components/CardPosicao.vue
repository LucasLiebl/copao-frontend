<script setup>
import CardJogador from '@/components/CardJogador.vue';
import { onMounted } from 'vue'
import { useJogadorStore } from '@/stores'

const jogadorStore = useJogadorStore()

onMounted(() => {
  jogadorStore.getJogadores()
})



</script>


<template>
    <div v-for="jogador in jogadorStore.jogadores" :key="jogador.id">
    <div v-if="jogador.posicao === 'goleiro'"> <CardJogador :nome="jogador.nome" :numero="jogador.numero" :posicao="jogador.posicao"/></div>
    </div>
 
  <!-- <div v-for="jogador in jogadorStore.jogadores" :key="jogador.id">
  
    <div v-if="jogador.posicao === 'goleiro'" class="goleiros">
      <CardJogador :jogador="jogador" />
    </div>

    <div v-else-if="jogador.posicao === 'ala'" class="alas">
      <CardJogador :jogador="jogador" />
    </div>

    <div v-else-if="jogador.posicao === 'fixo'" class="fixos">
      <CardJogador :jogador="jogador" />
    </div>

    <div v-else-if="jogador.posicao === 'pivo'" class="pivos">
      <CardJogador :jogador="jogador" />
    </div>
  </div> -->
</template>

<style scoped>
.goleiros {
  display: flex;
  justify-content: center;
}

.alas {
  display: flex;
  justify-content: center;
}

.fixos {
  display: flex;
  justify-content: center;
}

.pivos {
  display: flex;
  justify-content: center;
}
</style>
