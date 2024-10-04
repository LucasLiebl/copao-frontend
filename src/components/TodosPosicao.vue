<script setup>
import { computed, onMounted } from 'vue'
import CardJogador from '@/components/CardJogador.vue';
import { useJogadorStore } from '@/stores'
import BotaoJogador from '@/components/BotaoJogador.vue';

const jogadorStore = useJogadorStore()

onMounted(() => {
  jogadorStore.getJogadores()
})

const goleiros = computed(() => {
  return jogadorStore.jogadores.filter(jogador => jogador.posicao === 'goleiro')
})

const alas = computed(() => {
  return jogadorStore.jogadores.filter(jogador => jogador.posicao === 'ala')
})
const fixos = computed(() => {
  return jogadorStore.jogadores.filter(jogador => jogador.posicao === 'fixo')
})
const pivos = computed(() => {
  return jogadorStore.jogadores.filter(jogador => jogador.posicao === 'pivo')
})
</script>

<template>
  <BotaoJogador/>
  <div class="jogadores-container">
    <div class="posicao-container">
      <h1>GOLEIROS</h1>
      <div class="jogadores-linha">
        <div v-for="goleiro in goleiros" :key="goleiro.id" class="jogador-card">
          <CardJogador :nome="goleiro.nome" :numero="goleiro.numero" :posicao="goleiro.posicao" />
        </div>
      </div>
    </div>

    <div class="posicao-container">
      <h1>ALAS</h1>
      <div class="jogadores-linha">
        <div v-for="ala in alas" :key="ala.id" class="jogador-card">
          <CardJogador :nome="ala.nome" :numero="ala.numero" :posicao="ala.posicao" />
        </div>
      </div>
    </div>

    <div class="posicao-container">
      <h1>FIXOS</h1>
      <div class="jogadores-linha">
        <div v-for="fixo in fixos" :key="fixo.id" class="jogador-card">
          <CardJogador :nome="fixo.nome" :numero="fixo.numero" :posicao="fixo.posicao" />
        </div>
      </div>
    </div>

    <div class="posicao-container">
      <h1>PIVOS</h1>
      <div class="jogadores-linha">
        <div v-for="pivo in pivos" :key="pivo.id" class="jogador-card">
          <CardJogador :nome="pivo.nome" :numero="pivo.numero" :posicao="pivo.posicao" />
        </div>
      </div>
    </div>
  </div>
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
.posicao-container {
  margin-bottom: 40px; 
}
.jogadores-linha {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; 

}
h1 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #FFFFFF;
  text-align: center;
}

.posicao-container > h1 {
  margin-left: 0px;
  text-align: left; 
}

</style>

