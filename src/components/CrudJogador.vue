<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useJogadorStore, useTimeStore } from '@/stores'

const jogadorStore = useJogadorStore()
const timesStore = useTimeStore()

onMounted(async () => {
  await jogadorStore.getJogadores()
  await timesStore.getTimes()
})


const newObject = reactive({
  nome: '',
  idade: '',
  email: '',
  posicao: '',
  numero: '',
  id: null,
  times: [
    {
      time: '',
      data_inicio: ''
    }
  ]
})

const deleteId = ref(0)

function editar(jogador_para_editar) {
  Object.assign(newObject, jogador_para_editar)
}

 async function salvar(newObject) {
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
  <div class="app-container">
    <div class="loading" v-if="jogadorStore.isLoading">loading</div>
    <div class="content-container">
      <div class="list-container">
        <ul class="jogador-list">
          <li v-for="jogador in jogadorStore.jogadores" :key="jogador" @click="editar(jogador)">
            {{ jogador }}
          </li>
        </ul>
      </div>

      <div class="form-container">
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
          <select v-model="newObject.times[0].time">
            <option v-for="time in timesStore.times" :key="time.id" :value="time.id">{{ time.nome }}</option>
          </select>
          <input type="number" placeholder="numero" v-model="newObject.numero" />
          <input type="submit" class="submit-button" />
        </form>
        <div class="delete-container">
          <input type="number" v-model="deleteId" placeholder="ID para deletar" />
          <button @click="jogadorStore.deleteJogador(deleteId)" class="delete-button">
            delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #303030;
  font-family: Arial, sans-serif;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  color: white;
  font-size: 1.5rem;
  width: 100%;
  height: 100vh;
}

.content-container {
  display: flex;
  gap: 2rem;
  flex-direction: row;
  width: 90%;
  margin: 20px;
}

.list-container {
  width: 65%;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2px;
  overflow-y: auto;
  max-height: 550px;
}

.jogador-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.jogador-list li {
  padding: 0.5rem;
  margin: 0.5rem 0;
  color: black;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

.jogador-list li:hover {
  background: #303030;
}

.form-container {
  width: 50%;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input,
select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.submit-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
}

.submit-button:hover {
  background-color: #218838;
}

.delete-container {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
}

.delete-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #c82333;
}
</style>