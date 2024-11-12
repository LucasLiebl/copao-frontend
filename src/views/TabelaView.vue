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

    <div class="tabelaContainer"> <TabelaComponent :times="timeStore.times"></TabelaComponent> </div>
   
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
  overflow-x: scroll;
}
.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 34px;
}
@media only screen and (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column-reverse;
    padding: 10px ;
  }
  .cards {
    display: flex;
    align-items: center;
    
  }
  .tabelaContainer{
    width: 100%;
    padding: 20px;
  }

}
</style>
