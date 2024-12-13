<script setup>
import CrudJogador from '@/components/CrudJogador.vue';
import CardAdmin from '@/components/CardAdmin.vue';
import { useJogadorStore } from '@/stores';
import { onMounted, ref } from 'vue';

const JogadorStore = useJogadorStore()

onMounted(async () => {
  await JogadorStore.getJogadores()
})
</script>
<template>
  <CrudJogador />
  <CardAdmin
            v-for="item in JogadorStore.jogadores" :key="item.id" 
            :foto="item?.foto"      
            :nome="item?.nome"
            :numero="item?.numero"
          />
</template>