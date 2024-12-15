<script setup>
import CardComponent from '@/components/CardComponent.vue';
import CardComponentArt from '@/components/CardComponentArt.vue';
import JogadorGrandeComponente from '@/components/JogadorGrandeComponente.vue';
import { onMounted, } from 'vue'
import { useTimeStore, useJogadorStore, } from '@/stores'  // Ajuste o import se necessário

const props = defineProps(['id'])
const timeStore = useTimeStore()  // Atualize o nome do store
const JogadorStore = useJogadorStore()

onMounted(async () => {
  await timeStore.getTimes()
  await JogadorStore.getJogador(props.id)
  await JogadorStore.getJogadores()
  await JogadorStore.getArtilheiros()
})


</script>

<template>
  <div class="container"> 
    <div class="cards">
      <CardComponent :datas="timeStore.times"  />
      <CardComponentArt :datas="JogadorStore.artilheiros" :titulo="'Artilheiros'" />
    </div>
    <div class="tabelaContainer">
        <JogadorGrandeComponente
            :data="JogadorStore.jogador"
            :foto="JogadorStore.jogador.foto"
            ></JogadorGrandeComponente>

    </div>
 
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
  height: 100%;
  background-color: #1E1E1E;
  border-radius: 15px;
  align-items: flex-start;
  justify-content: center;
}
.cards {
  display: flex;
  flex-direction: column;
  gap: 34px;
}
</style>