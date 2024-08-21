<script setup>
import { onMounted } from 'vue';
import { useJogadorStore } from '@/stores';

const jogadorStore = useJogadorStore();

onMounted(() => {
    jogadorStore.getJogadores();
});

</script>

<template>
  <div>
    <h1>Jogador Test</h1>
    <p>Jogador: {{ jogadorStore.state }}</p>
  </div>
  </template>