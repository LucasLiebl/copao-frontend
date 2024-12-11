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
  id: null,
  times:[{
    time: 1,
    data_inicio: "2024-12-22"
  }],
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
  <div class="loading" v-if="jogadorStore.isLoading">loading</div>
  <div v-else>
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
      <select v-model="newObject.posicao">
      <option value="" disabled>Escolha a posição</option>
      <option value="1">Goleiro</option>
      <option value="2">Fixo</option>
      <option value="3">Ala</option>
      <option value="4">Pivo</option>
      </select>
      <input type="number" placeholder="numero" v-model="newObject.numero" />
      <input type="submit" />
    </form>
    <input type="number" v-model="deleteId" />
    <button @click="jogadorStore.deleteJogador(deleteId)">
      delete
    </button>
  </div>
</template>

<style scoped>
.loading {
  background-color: red;
  width: 100vw;
  height: 100vh;
}
li{
  color: beige;
}
</style>
