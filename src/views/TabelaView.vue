<script setup>
import TabelaComponent from '@/components/TabelaComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import CardComponentArt from '@/components/CardComponentArt.vue';
import { onMounted } from 'vue'
import { useTimeStore, useJogadorStore } from '@/stores'  // Ajuste o import se necessário


const timeStore = useTimeStore()  // Atualize o nome do store
const JogadorStore = useJogadorStore()

onMounted(async () => {
  await timeStore.getTimes()
  await JogadorStore.getJogadores()
  console.log(JogadorStore.jogadores)
})



</script>

<template>
  <div class="container">
    <div class="cards">
      <CardComponent :datas="timeStore.times"  />
      <CardComponentArt :datas="JogadorStore.jogadores" :titulo="'Artilheiros'" />
    </div>


    <TabelaComponent :times="timeStore.times"></TabelaComponent>
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
