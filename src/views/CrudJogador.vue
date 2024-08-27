<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useJogadorStore } from '@/stores'

const jogadorStore = useJogadorStore()

onMounted(() => {
  jogadorStore.getJogadores()
})
const newObject = reactive({
  nome: '',
  idade: '',
  email: '',
  posicao: '',
  numero: '',
  id: null
})

const deleteId = ref(0)

function editar(jogador_para_editar) {
  Object.assign(newObject, jogador_para_editar)
}
function salvar(newObject) {
  console.log(newObject)
  if (newObject.id) {
    jogadorStore.updateJogador(newObject)
    console.log('updateJogador console.log')
  } else {
    console.log('criar')
    jogadorStore.createJogador(newObject)
  }
}
</script>

<template>
  <div>
    <ul>  
      <li v-for="jogador in jogadorStore.jogadores" :key="jogador" @click="editar(jogador)">
        {{ jogador }}
      </li>
    </ul>

    <h1>Jogador Test</h1>
    <form @submit.prevent="salvar(newObject)">
      <input type="text" placeholder="nome" v-model="newObject.nome" />
      <input type="number" placeholder="idade" v-model="newObject.idade" />
      <input type="email" placeholder="email" v-model="newObject.email" />
      <input type="text" placeholder="posição" v-model="newObject.posicao" />
      <input type="number" placeholder="numero" v-model="newObject.numero" />
      <input type="submit" />
    </form>
    <input type="number" v-model="deleteId" /><button @click="jogadorStore.deleteJogador(deleteId)">
      delete
    </button>
  </div>
</template>
