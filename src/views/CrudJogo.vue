<script setup>
import JogoComponent from '@/components/JogoComponent.vue';
import { onMounted, reactive, ref } from 'vue'
import { useJogoStore, useTimeStore } from '@/stores'

const timeStore = useTimeStore()
const jogoStore = useJogoStore()

onMounted(() => {
  jogoStore.getJogos()
  timeStore.getTimes()
})
const newObject = reactive({
  id: null,
  data: '',
  horario: '',
  endereco: '',
  rodada: '',
  time_mandante: '',
  time_visitante: '',
  gols: '',
  cartoes: ''
})

const deleteID = ref(0)


function editar(jogo_para_editar) {
  Object.assign(newObject, jogo_para_editar)
}
function salvar(newObject) {
  console.log(newObject)
  if (newObject.id) {
    jogoStore.updateJogo(newObject)
    console.log('updateJogo console.log')
  } else {
    console.log(newObject)
    jogoStore.createJogo(newObject)
  }
}
</script>

<template>
  <div class="loading" v-if="jogoStore.isLoading">loading</div>
  <div v-else>
    <h1>Jogo CRUD</h1>
    <form @submit.prevent="salvar(newObject)">
      <input type="date" placeholder="data" v-model="newObject.data" />
      <input type="time" placeholder="horario" v-model="newObject.horario" />
      <input type="text" placeholder="endereco" v-model="newObject.endereco" />
      <input type="number" placeholder="rodada" v-model="newObject.rodada" />

      <select name="" id="" v-model="newObject.time_mandante">
        <option v-for="time in timeStore.times" :key="time" :value="time.id">
          {{ time.nome }}
        </option>
      </select>

      <select name="" id="" v-model="newObject.time_visitante">
        <option v-for="time in timeStore.times" :key="time" :value="time.id">
          {{ time.nome }}
        </option>
      </select>

      <input type="text" placeholder="gols" v-model="newObject.gols" />

      <input type="text" placeholder="cartoes" v-model="newObject.cartoes" />

      <input type="submit" />
    </form>
    <input type="number" v-model="deleteID" />
    <button @click="jogoStore.deleteJogo(deleteID)">delete</button>
    
    <h1>Jogo Listagem</h1>
    <ul>
      <li v-for="jogo in jogoStore.jogos" :key="jogo" @click="editar(jogo)">
        <JogoComponent :data="jogo.data" :horario="jogo.horario" :endereco="jogo.endereco" :timeM="jogo.time_mandante" 
        :timeV="jogo.time_visitante "
        ></JogoComponent>
        <p>id: {{ jogo.id }}</p>
        <p>data: {{ jogo.data }}</p>
        <p>horario: {{ jogo.horario }}</p>
        <p>endereco: {{ jogo.endereco }}</p>
        <p>rodada: {{ jogo.rodada }}</p>
        <p>time mandante: {{ jogo.time_mandante }}</p>
        <p>time visitante: {{ jogo.time_visitante }}</p>
        <p>gols: {{ jogo.gols }}</p>
        <p>cartoes: {{ jogo.cartoes }}</p>
        <hr>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.loading {
  background-color: red;
  width: 100vw;
  height: 100vh;
}
</style>
