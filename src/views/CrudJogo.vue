<script setup>
import JogoComponent from '@/components/JogoComponent.vue'
import { onMounted, reactive, ref, computed } from 'vue'
import { useJogoStore, useTimeStore, useRodadaStore } from '@/stores'

const timeStore = useTimeStore()
const jogoStore = useJogoStore()
const rodadaStore = useRodadaStore()

onMounted(() => {
  jogoStore.getJogos()
  timeStore.getTimes()
  rodadaStore.getRodadas()
})
const newObject = reactive({
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
    newObject.gols = allGoals
    jogoStore.updateJogo(newObject)
    console.log('updateJogo console.log')
  } else {
    console.log(newObject)
    newObject.gols = allGoals
    jogoStore.createJogo(newObject)
  }
}

const selectJogadores = computed(() => {
  return timeStore.times
    .filter((time) => time.id === newObject.time_mandante || time.id === newObject.time_visitante)
    .flatMap((time) => time.jogadores)
})
// filter: Selects only the teams whose id matches newObject.time_mandante or newObject.time_visitante.
// flatMap: Maps over each selected team to extract the jogadores array, and then "flattens" all these arrays into a single array of players.

console.log(selectJogadores)

const selectTimes = computed(() => {
  return timeStore.times.filter(
    (time) => time.id === newObject.time_mandante || time.id === newObject.time_visitante
  )
})

const allGoals = ref([])

const golsJsonField = ref({
  jogador: null,
  time: null,
  gol_pro: true
})

function salvarGols() {
  allGoals.value.push(golsJsonField)
}
</script>

<template>
  <div class="loading" v-if="jogoStore.isLoading">loading</div>
  <div v-else>
    <h1>Jogo CRUD</h1>
    <form @submit.prevent="salvar       (newObject)">
      <input type="date" placeholder="data" v-model="newObject.data" />
      <input type="time" placeholder="horario" v-model="newObject.horario" />
      <input type="text" placeholder="endereco" v-model="newObject.endereco" />

      <label for="rodada">Rodada</label>
      <input type="number" v-model="newObject.rodada" />

      <label for="timeM">Time Mandante</label>
      <select name="" id="" v-model="newObject.time_mandante">
        <option v-for="time in timeStore.times" :key="time" :value="time.id">
          {{ time.nome }}
        </option>
      </select>

      <label for="timeV">Time Visitante</label>
      <select name="" id="" v-model="newObject.time_visitante">
        <option v-for="time in timeStore.times" :key="time" :value="time.id">
          {{ time.nome }}
        </option>
      </select>

      <label for="marcadorGol">Marcador gol</label>
      <select name="" id="" v-model="golsJsonField.jogador">
        <option v-for="jogador in selectJogadores" :key="jogador.id" :value="jogador.id">
          {{ jogador.nome }}
        </option>
      </select>

      <label for="timeMarcador">Time Marcador</label>
      <select name="" id="" v-model="golsJsonField.time">
        <option v-for="time in selectTimes" :key="time.id" :value="time.id">{{ time.nome }}</option>
      </select>

      <input type="checkbox" v-model="golsJsonField.gol_pro" />
      {{ golsJsonField }}

      <input type="submit" value="salvar gols" @click="salvarGols()" />
      {{ allGoals }}

      <input type="submit" />
    </form>
    <input type="number" v-model="deleteID" />
    <button @click="jogoStore.deleteJogo(deleteID)">delete</button>

    <h1>Jogo Listagem</h1>
    <ul>
      <li v-for="jogo in jogoStore.jogos" :key="jogo" @click="editar(jogo)">
        <JogoComponent
          :key="jogo.id"
          :data="jogo.data"
          :endereco="jogo.endereco"
          :horario="jogo.horario"
          :time-m="jogo.time_mandante"
          :time-v="jogo.time_visitante"
          :escudo-m="jogo.time_mandante.escudo.url"
          :escudo-v="jogo.time_visitante.escudo.url"
          :gols="jogo.gols"
          :id="jogo.id"
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
        <hr />
      </li>
    </ul>
  </div>

  <div>
    <select name="" id="">
      <option value="1">jogador 1</option>
      <option value="1">jogador 1</option>
      <option value="1">jogador 1</option>
      <option value="1">jogador 1</option>
      <option value="1">jogador 1</option>
      <option value="1">jogador 1</option>
      <option value="1">jogador 1</option>
    </select>
    <select>
      <option value="1">Mandante</option>
      <option value="2">visitante</option>
    </select>
    <input type="checkbox" label="Gol pró" />
  </div>
</template>

<style scoped>
* {
  background-color: rgb(255, 255, 255);
}
.loading {
  background-color: red;
  width: 100vw;
  height: 100vh;
}
</style>
