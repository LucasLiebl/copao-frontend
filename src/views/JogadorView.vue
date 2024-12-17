<script setup>
import CardComponent from '@/components/CardComponent.vue';
import CardComponentArt from '@/components/CardComponentArt.vue';
import JogadorGrandeComponente from '@/components/JogadorGrandeComponente.vue';
import { onMounted, watch } from 'vue'
import { useTimeStore, useJogadorStore, } from '@/stores'  // Ajuste o import se necessário
import { useRoute } from 'vue-router'; // Import Vue Router's useRoute for route access

const route = useRoute(); // To access route params


const props = defineProps(['id'])
const timeStore = useTimeStore()  // Atualize o nome do store
const JogadorStore = useJogadorStore()

onMounted(async () => {
  await timeStore.getTimes()
  await JogadorStore.getJogador(props.id)
  await JogadorStore.getJogadores()
  await JogadorStore.getArtilheiros()
})

// Watch for changes in the `id` prop or the route
watch(
  () => route.params.id, // Watch for changes in the route parameter 'id'
  async (newId) => {
    // If the 'id' changes, fetch the data again
    props.id = newId; // Update the `id` prop
    await   await JogadorStore.getJogador(props.id); // Refetch the data for the new player
  },
  { immediate: true } // Fetch data immediately on initial mount
);


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
            :foto="JogadorStore.jogador.foto?.url"
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