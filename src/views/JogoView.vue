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
  console.log(JogadorStore.jogadores)
})


const jogo = computed(() => {
  return jogoStore.jogo
})
console.log(jogo.value)


// const jogadoresMarcaram = computed(() =>{
//   return JogadorStore.jogadores.filter((j) => j.id == for(gol in jogo.value.gols) )
// })

// const jogadoresMarcaram = computed(() => {
//   // Ensure that jogo.value and jogo.value.gols exist
//   if (!jogo.value || !jogo.value.gols) return [];

//   // Extract all jogador IDs from jogo.value.gols
//   const jogadoresIds = jogo.value.gols.map((gol) => gol.jogador);

//   // Filter JogadorStore.jogadores to find matching jogadores
//   return JogadorStore.jogadores.filter((j) => jogadoresIds.includes(j.id));
// });

// console.log(jogadoresMarcaram)

</script>

<template>
  <div class="container"> 
    <div class="cards">
      <CardComponent :datas="timeStore.times"  />
      <CardComponentArt :datas="JogadorStore?.jogadores" :titulo="'Artilheiros'" />
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