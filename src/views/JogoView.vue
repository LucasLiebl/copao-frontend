<script setup>
import { onBeforeMount, computed, ref  } from 'vue'
import { useJogoStore, useJogadorStore } from '@/stores'
import JogoGrandeComponent from '@/components/JogoGrandeComponent.vue'

const props = defineProps(['id'])
const jogoStore = useJogoStore()
const jogadorStore = useJogadorStore()

onBeforeMount(async () => {
   await jogoStore.getJogos(props.id)
   await jogadorStore.getJogadores()
   console.log(jogoStore.jogos)
})

const jogo = computed(() => {
  return jogoStore.jogos.filter((j) => j.id == props.id)
})



</script>

<template>
  <div class="jogoContainer"> 
 <JogoGrandeComponent
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
          ></JogoGrandeComponent>
          </div>
</template>

<style scoped>
.jogoContainer{
  display: flex;
  width: 1000px;
  background-color: black;
}
</style>
