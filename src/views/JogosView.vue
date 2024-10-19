<script setup>
import { onMounted, ref } from 'vue'
import { useRodadaStore } from '@/stores'
import JogoComponent from '@/components/JogoComponent.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'

const rodadaStore = useRodadaStore()

onMounted(() => {
  rodadaStore.getRodadas()
})

const SeletorRodada = ref(1)
</script>

<template>
  <div class="container">
    <div class="inside-container">
      <div class="numero-rodada">
        <ChevronLeft @click="SeletorRodada--" class="icon" :size="34"></ChevronLeft>
        <h1>Rodada {{ SeletorRodada }}</h1>
        <ChevronRight @click="SeletorRodada++" class="icon" :size="34"></ChevronRight>
      </div>
      <div v-for="rodada in rodadaStore.rodadas" :key="rodada.id" >
          <JogoComponent
            v-for="jogo in rodada.jogos" v-if="rodada.id === SeletorRodada"
            :key="jogo.id"
            :data="jogo.data"
            :endereco="jogo.endereco"
            :horario="jogo.horario"
            :time-m="jogo.time_mandante"
            :time-v="jogo.time_visitante"
            :escudo-m="jogo.time_mandante_escudo"
            :escudo-v="jogo.time_visitante_escudo"
          ></JogoComponent>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
