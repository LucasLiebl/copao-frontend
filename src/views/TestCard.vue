<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useTimeStore, useJogadorStore } from '@/stores'  // Ajuste o import se necessário
import cardComponent from '@/components/cardComponent.vue';


const timeStore = useTimeStore()  // Atualize o nome do store
const jogadorStore = useJogadorStore()

onMounted(() => {
  timeStore.getTimes() 
  jogadorStore.getJogadores()
})

</script>

<template> 
<cardComponent :datas="timeStore.times"/>
<cardComponent :datas="jogadorStore.jogadores" :titulo="Artilheiros"/>
</template>