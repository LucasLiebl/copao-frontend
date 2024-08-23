<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useJogadorStore } from '@/stores';

const jogadorStore = useJogadorStore();

onMounted(() => {
    jogadorStore.getJogadores();
});
const newObject = reactive({
    "nome": '',
    "idade": '',
    "email": '',
    "posicao": '',
    "numero": '',

});

const deleteId = ref(0)


</script>

<template>
  <div>
    <h1>Jogador Test</h1>
    <p>Jogador: {{ jogadorStore.state }}</p>
    <form @submit="jogadorStore.createJogador(newObject)">
        <input type="text" placeholder="nome" v-model="newObject.nome">
        <input type="number" placeholder="idade" v-model="newObject.idade">
        <input type="email" placeholder="email" v-model="newObject.email">
        <input type="text" placeholder="posição" v-model="newObject.posicao">
        <input type="number" placeholder="numero" v-model="newObject.numero">
        <input type="submit">
    </form>
    <input type="number" v-model="deleteId"><button @click="jogadorStore.deleteJogador(deleteId)">delete</button>
  </div>
  </template>