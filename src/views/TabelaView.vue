<script setup>
import { onMounted } from 'vue'
import { useTimeStore, useJogadorStore } from '@/stores'  // Ajuste o import se necessário
import cardComponent from '@/components/cardComponent.vue';
import TabelaComponent from '@/components/TabelaComponent.vue';

const timeStore = useTimeStore()  // Atualize o nome do store
const jogadorStore = useJogadorStore()

onMounted(() => {
  timeStore.getTimes() 
  jogadorStore.getJogadores()
})
</script>

  <template>
<div class="container">

<div>
  <cardComponent :datas="timeStore.times"/>
  <cardComponent :datas="jogadorStore.jogadores" :titulo="Artilheiros"/>

</div>
<TabelaComponent />
</div>

  </template>
  
  <style scoped>

.container{
display: flex;
}

</style>