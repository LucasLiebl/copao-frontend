<script setup>
import TabelaComponent from '@/components/TabelaComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import { onMounted } from 'vue'
import { useTimeStore, useTimeJogadorStore } from '@/stores'  // Ajuste o import se necessário


const timeStore = useTimeStore()  // Atualize o nome do store
const timeJogadorStore = useTimeJogadorStore()

onMounted(async () => {
  await timeStore.getTimes()
  await timeJogadorStore.getTimeJogadores()
  console.log(timeJogadorStore.timeJogadores)
})


</script>

<template>
  <div class="container">
    <div class="cards">
      <CardComponent :datas="timeStore.times"  />
      <CardComponent :datas="timeJogadorStore.timeJogadores.map(jogador => jogador.jogador)" :titulo="'Artilheiros'" />
    </div>


    <TabelaComponent></TabelaComponent>
  </div>

</template>

<style scoped>
.container {
  display: flex;
  padding: 34px;
  gap: 34px;
  flex-direction: row;

}

.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 34px;
}
</style>
