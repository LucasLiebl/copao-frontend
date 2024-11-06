<script setup>
import { onBeforeMount, ref, computed } from 'vue'
import { useRodadaStore } from '@/stores'
import JogoComponent from '@/components/JogoComponent.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'

const rodadaStore = useRodadaStore()

onBeforeMount(() => {
  rodadaStore.getRodadas()
})

const SeletorRodada = ref(1)

function jogosRodada (jogos) {
  return jogos.filter(j => j.rodada === SeletorRodada.value) 
}


</script>

<template>
  <div class="container">
    <div class="inside-container">
      <div class="numero-rodada">
        <ChevronLeft @click="SeletorRodada--" class="icon" :size="34"></ChevronLeft>
        <h1>Rodada {{ SeletorRodada }}</h1>
        <ChevronRight @click="SeletorRodada++" class="icon" :size="34"></ChevronRight>
      </div>
      <div class="jogosComponent"
       v-for="rodada in rodadaStore.rodadas" :key="rodada.id" >
          <JogoComponent
            v-for="jogo in jogosRodada(rodada.jogos)"
            :key="jogo.id"
            :data="jogo.data"
            :endereco="jogo.endereco"
            :horario="jogo.horario"
            :time-m="jogo.time_mandante"
            :time-v="jogo.time_visitante"
            :escudo-m="jogo.time_mandante.escudo.url"
            :escudo-v="jogo.time_visitante.escudo.url"
            :gols="jogo.gols"
          ></JogoComponent>
      </div>
    </div>
  </div>
</template>

<style scoped>
.jogosComponent{
  display: flex;
  flex-direction: column;
  gap: 34px;
}
.container {
  padding: 45px;
  display: flex;
  justify-content: center;
}
.inside-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1e1e;
  width: 100vw;
  height: 800px;
  border-radius: 15px;
  padding: 25px;
  gap: 24px;
}
.numero-rodada {
  display: flex;
  color: white;
  align-items: center;
  & h1 {
    font-size: 30px;
    font-weight: 500;
  }
}
.icon {
  color: white;
  cursor: pointer;
  transition: .2s;
}
.icon:active {
transform: scale(0.7)}

</style>
