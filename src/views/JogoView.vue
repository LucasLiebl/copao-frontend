<script setup>
import { onBeforeMount, computed } from 'vue'
import { useJogoStore } from '@/stores'
import JogoGrandeComponent from '@/components/JogoGrandeComponent.vue'

const props = defineProps(['id'])
const jogoStore = useJogoStore()

onBeforeMount(async () => {
  if (props.id) {
    await jogoStore.getJogos(props.id)
  }
})

const jogo = computed(() => {
  return jogoStore.jogos.filter((j) => j.id == props.id)
})
console.log(jogo.value)
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
