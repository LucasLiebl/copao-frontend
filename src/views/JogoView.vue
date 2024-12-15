<script setup>
import JogoGrandeComponent from '@/components/JogoGrandeComponent.vue'
import CardComponent from '@/components/CardComponent.vue';
import CardComponentArt from '@/components/CardComponentArt.vue';
import { onMounted, computed } from 'vue'
import { useTimeStore, useJogadorStore, useJogoStore } from '@/stores'  // Ajuste o import se necessário

const props = defineProps(['id'])
const jogoStore = useJogoStore()
const timeStore = useTimeStore()  // Atualize o nome do store
const JogadorStore = useJogadorStore()

onMounted(async () => {
  await jogoStore.getJogo(props.id)
  await timeStore.getTimes()
  await JogadorStore.getJogadores()
  await JogadorStore.getArtilheiros()
  console.log(JogadorStore.jogadores)
})


const jogo = computed(() => {
  return jogoStore.jogo
})
console.log(jogo.value)


</script>

<template>
    <div  :class="jogoStore.isLoading ? 'loading' : 'notLoading'">
    <svg viewBox="25 25 50 50" >
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  </div>
  <div :class="jogoStore.isLoading ? 'notLoading' : 'container'"> 
    <div class="cards">
      <CardComponent :datas="timeStore.times"  />
      <CardComponentArt :datas="JogadorStore.artilheiros" :titulo="'Artilheiros'" />
    </div>
    <div class="tabelaContainer"><JogoGrandeComponent
            :key="jogo"
            :data="jogo.data"
            :endereco="jogo.endereco"
            :horario="jogo.horario"
            :time-m="jogo.time_mandante"
            :time-v="jogo.time_visitante"
            :escudo-m="jogo.time_mandante?.escudo?.url"
            :escudo-v="jogo.time_visitante?.escudo?.url"
            :gols="jogo.gols"
            :id="jogo.id"
          ></JogoGrandeComponent></div>
 
          </div>
</template>

<style scoped>
svg {
  width: 3.25em;
  transform-origin: center;
  animation: rotate4 2s linear infinite;
}

circle {
  fill: none;
  stroke: hsl(0, 0%, 100%);
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash4 {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
}
.notLoading{
  display: none;
  transition: 5ms;
}
.loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgb(32, 32, 32);
  transition: 5ms;
  display: flex;
  align-content: center;
  justify-content: center
  
}
.container {
  display: flex;
  padding: 34px;
  gap: 34px;
  flex-direction: row;


}
.tabelaContainer{
  padding-top: 15px;
  display: flex;
  width: 1200px;
  background-color: #1E1E1E;
  border-radius: 15px;
  align-items: flex-start;
  justify-content: center;
}
.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 34px;
}
</style>