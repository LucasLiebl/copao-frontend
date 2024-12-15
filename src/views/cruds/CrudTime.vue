<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useTimeStore } from '@/stores'  // Ajuste o import se necessário

const timeStore = useTimeStore()  // Atualize o nome do store

onMounted(() => {
  timeStore.getTimes() 
  console.log(timeStore.getTimes())
  // Atualize para obter os times
})

const newObject = reactive({
  nome: '',
  gols_pro: '',
  gols_contra: '',
  vitoria: '',
  derrota: '',
  pontos: '',
  campeonato: 1,
  id: null
})

const deleteId = ref(0)

function editar(time_para_editar) {
  Object.assign(newObject, time_para_editar)  // Ajuste para time
}

function salvar(newObject) {
  console.log(newObject)
  if (newObject.id) {
    timeStore.updateTime(newObject)  // Atualize para updateTime
    console.log('updateTime console.log')
  } else {
    console.log('criar')
    timeStore.createTime(newObject)  // Atualize para createTime
  }
}
</script>

<template>
  <div class="loading" v-if="timeStore.isLoading">loading</div>
  <div v-else>
    <ul>
      <li v-for="time in timeStore.times" :key="time" @click="editar(time)">  <!-- Atualize para time e times -->
        {{ time }}  <!-- Ajuste conforme as propriedades de time -->
      </li>
    </ul>

    <h1>Time Test</h1>
    <form @submit.prevent="salvar(newObject)">
      <input type="text" placeholder="nome" v-model="newObject.nome" />
      <input type="number" placeholder="gols_pro" v-model="newObject.gols_pro" />
      <input type="number" placeholder="gols_contra" v-model="newObject.gols_contra" />
      <input type="number" placeholder="vitorias" v-model="newObject.vitoria" />
      <input type="number" placeholder="derrotas" v-model="newObject.derrota" />
      <input type="number" placeholder="pontos" v-model="newObject.pontos" />
      <input type="submit" />
    </form>
    <input type="number" v-model="deleteId" />
    <button @click="timeStore.deleteTime(deleteId)">  <!-- Atualize para deleteTime -->
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
