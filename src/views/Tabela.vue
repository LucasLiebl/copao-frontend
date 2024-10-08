<script setup>
import TabelaComponent from '@/components/TabelaComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import { onMounted} from 'vue'
import { useTimeStore, useJogadorStore } from '@/stores'  // Ajuste o import se necessário


const timeStore = useTimeStore()  // Atualize o nome do store
const jogadorStore = useJogadorStore()

onMounted(() => {
  timeStore.getTimes() 
  jogadorStore.getJogadores()
})


</script>

<template>
  <div class="container">
    <div class="cards"><CardComponent :datas="timeStore.times"/>
  <CardComponent :datas="jogadorStore.jogadores" :titulo="Artilheiros"/> 
</div>
    

<TabelaComponent></TabelaComponent> 
</div>
  
</template>

<style scoped>
.container{
display: flex;
padding: 34px;
gap: 34px;

}
.cards{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 34px;
}
</style>
