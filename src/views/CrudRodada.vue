<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRodadaStore } from '@/stores'

const rodadaStore = useRodadaStore()

onMounted(() => {
  rodadaStore.getRodadas()
})
const newObject = reactive({
  id: null,
  numero_rodada: '',
  data_inicio: '',
  data_termino: '',
  campeonato: ''  ,
})

const deleteId = ref(0)

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
    <ul>
      <li v-for="rodada in rodadaStore.rodadas" :key="rodada" @click="editar(rodada)">
        <h2>rodada do jogo: {{ rodada.numero_rodada }} </h2>
        {{ rodada.data_inicio }}
        {{ rodada.data_termino }}
        <h1>rodadas.jogos</h1>
        <ul>
          <li v-for="jogo in rodada.jogos" :key="jogo">
            {{ jogo }}
            <h2>rodada do jogo: {{ rodada.numero_rodada }} </h2>
          </li>
          <hr>
        </ul>
      </li>
    </ul>

    <h1>Rodada Test</h1>
    <form @submit.prevent="salvar(newObject)">
      <input type="number" placeholder="numero da rodada" v-model="newObject.numero_rodada" />
      <input type="date" placeholder="data de inicio" v-model="newObject.data_inicio" />
      <input type="date" placeholder="data de termino" v-model="newObject.data_termino" />
      <input type="submit" />
    </form>
    <input type="number" v-model="deleteId" />
    <button @click="rodadaStore.deleteRodada(deleteId)">
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
</style>
