<script setup>
import { computed, onMounted } from 'vue'
import CardJogador from '@/components/CardJogador.vue';
import { useJogadorStore } from '@/stores'
import BotaoJogador from '@/components/BotaoJogador.vue';

const jogadorStore = useJogadorStore()

onMounted(() => {
  jogadorStore.getJogadores()
})
const fixos = computed(() => {
  return jogadorStore.jogadores.filter(jogador => jogador.posicao === 'fixo')
})
</script>
<template>
     <BotaoJogador/>
     <div class="jogadores-container"><div class="posicao-container">
      <h1>FIXOS</h1>
      <div class="jogadores-linha">
        <div v-for="fixo in fixos" :key="fixo.id" class="jogador-card">
          <CardJogador :nome="fixo.nome" :numero="fixo.numero" :posicao="fixo.posicao" />
        </div>
      </div>
    </div></div>
 

</template>

<style scoped>
.jogadores-container {
  display: flex;
  flex-direction: column; 
  background-color: #1E1E1E;
  border-radius: 10px;
  padding: 30px;
  margin: 50px;
}
.jogadores-linha {
  display: flex; 
  flex-wrap: wrap;  
}
h1 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #ffff;
}

</style>