<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRodadaStore } from '@/stores'
import CrudJogo from './CrudJogo.vue'

const rodadaStore = useRodadaStore()

onMounted(() => {
  rodadaStore.getRodadas()
})
const newObject = reactive({
  id: null,
  numero_rodada: '',
  data_inicio: '',
  data_termino: '',
  campeonato: ''
})

const deleteID = ref(0)

function editar(rodada_para_editar) {
  Object.assign(newObject, rodada_para_editar)
}
function salvar(newObject) {
  console.log(newObject)
  if (newObject.id) {
    rodadaStore.updateRodada(newObject)
    console.log('updateRodada console.log')
  } else {
    console.log('criar')
    rodadaStore.createRodada(newObject)
  }
}
</script>

<template>
  <div class="loading" v-if="rodadaStore.isLoading">loading</div>
  <div v-else>
    <h1>Rodada CRUD</h1>
    <form @submit.prevent="salvar(newObject)">
      <input type="number" placeholder="numero da rodada" v-model="newObject.numero_rodada" />
      <input type="date" placeholder="data de inicio" v-model="newObject.data_inicio" />
      <input type="date" placeholder="data de termino" v-model="newObject.data_termino" />
      <input type="submit" />
    </form>
    <input type="number" v-model="deleteID" />
    <button @click="rodadaStore.deleteRodada(deleteID)">delete</button>

    <h1>Rodada Listagem</h1>
    <ul>
      <li v-for="rodada in rodadaStore.rodadas" :key="rodada" @click="editar(rodada)">
        <h2>numero da rodada: {{ rodada.numero_rodada }} id: {{ rodada.id }}</h2>
        <p>inicio {{ rodada.data_inicio }} fim {{ rodada.data_termino }}</p>
        <h2>rodadas.jogos</h2>
        <ul>
          <li v-for="jogo in rodada.jogos" :key="jogo">
            <p>id: {{ jogo.id }}</p>
            <p>data: {{ jogo.data }}</p>
            <p>horario: {{ jogo.horario }}</p>
            <p>endereco: {{ jogo.endereco }}</p>
            <p>time mandante: {{ jogo.time_mandante }}</p>
            <p>time visitante: {{ jogo.time_visitante }}</p>
            <p>gols: {{ jogo.gols }}</p>
            <p>cartoes: {{ jogo.cartoes }}</p>
          </li>
        </ul>
        <hr />
      </li>
    </ul>

    <CrudJogo />
  </div>
</template>

<style scoped>
.loading {
  background-color: red;
  width: 100vw;
  height: 100vh;
}
</style>
