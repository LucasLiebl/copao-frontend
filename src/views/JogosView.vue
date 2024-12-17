<script setup>
import { onBeforeMount, ref,  } from 'vue'
import { useRodadaStore } from '@/stores'
import JogoComponent from '@/components/JogoComponent.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'

const rodadaStore = useRodadaStore()

onBeforeMount(async () => {
  await rodadaStore.getRodadas()
})
const RodadaNumero = ref(1)

function jogosRodada (jogos) {
  console.log(jogos)
  return jogos.filter(j => j.rodada.numero_rodada === RodadaNumero.value) 
}

function SeletorRodada(operation){
  if (operation == -1){
    if(RodadaNumero.value >= 2) {
      RodadaNumero.value--
    }
  }
  else{
    RodadaNumero.value++
  }
}

</script>

<template>
  <div class="container">
    <div class="inside-container">
      <div class="numero-rodada">
        <ChevronLeft @click="SeletorRodada(-1)" class="icon" :size="34"></ChevronLeft>
        <h1>Rodada {{ RodadaNumero }}</h1>
        <ChevronRight @click="SeletorRodada(1)" class="icon" :size="34"></ChevronRight>
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
            :escudo-m="jogo.time_mandante.escudo?.url"
            :escudo-v="jogo.time_visitante.escudo?.url"
            :gols="jogo.gols"
            :id="jogo.id"
            :tipo="jogo.tipo_jogo"
            :realizado="jogo.jogo_realizado"
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

@media screen and (max-width: 480px) {
  .inside-container {
    padding: 5px; 
    gap: 8px; 
  }
 
  .jogosComponent {
    display: flex;
    flex-direction: column;
    width: 100%;  
    gap: 30px;
  }
}
</style>
