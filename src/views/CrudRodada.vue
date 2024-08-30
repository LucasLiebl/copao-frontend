<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRodadaStore } from '@/stores'
import rodada from '@/services/rodada';

const rodadaStore = useRodadaStore()

onMounted(() => {
  rodadaStore.getRodadas()
})
const newObject = reactive({
  id: null,
  numero_rodada: '',
  data_inicio: '',
  data_termino: '',
  campeonato: '',
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
      <h1>rodadas get</h1>
      <li v-for="rodada in rodadaStore.rodadas" :key="rodada" @click="editar(rodada)">
        {{ rodada }}
      </li>
    </ul>

    <h1>Rodada Test</h1>
    <form @submit.prevent="salvar(newObject)">
      <input type="number" placeholder="numero da rodada" v-model="newObject.nome" />
      <input type="date" placeholder="data de inicio" v-model="newObject.idade" />
      <input type="date" placeholder="data de termino" v-model="newObject.email" />
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
