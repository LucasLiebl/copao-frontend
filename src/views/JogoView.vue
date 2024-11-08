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
  await jogoStore.getJogos(props.id)
  await timeStore.getTimes()
  await JogadorStore.getJogadores()
  console.log(JogadorStore.jogadores)
})


const jogo = computed(() => {
  return jogoStore.jogos.filter((j) => j.id == props.id)
})



</script>

<template>
  <div class="container"> 
    <div class="cards">
      <CardComponent :datas="timeStore.times"  />
      <CardComponentArt :datas="JogadorStore?.jogadores" :titulo="'Artilheiros'" />
    </div>
    <div class="tabelaContainer"><JogoGrandeComponent
            v-for="item in jogo"
            :key="item.id"
            :data="item.data"
            :endereco="item.endereco"
            :horario="item.horario"
            :time-m="item.time_mandante"
            :time-v="item.time_visitante"
            :escudo-m="item.time_mandante.escudo.url"
            :escudo-v="item.time_visitante.escudo.url"
            :gols="item.gols"
            :id="item.id"
          ></JogoGrandeComponent></div>
 
          </div>
</template>

<style scoped>
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
