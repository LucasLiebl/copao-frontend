<script setup>
import JogoComponent from '@/components/JogoComponent.vue'
import { onMounted, reactive, ref, computed } from 'vue'
import { useJogoStore, useTimeStore, useRodadaStore, useJogadorStore } from '@/stores'

const timeStore = useTimeStore()
const jogoStore = useJogoStore()
const rodadaStore = useRodadaStore()
const jogadorStore = useJogadorStore()

onMounted(async () => {
  await jogoStore.getJogos()
  await timeStore.getTimes()
  await rodadaStore.getRodadas()
  await jogadorStore.getJogadores()
  console.log(jogadorStore.jogadores)
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
  id: 0,
  jogador: null,
  time: null,
  gol_pro: true
})

function calcID() {
  return allGoals.value.length + 1
}

function salvarGols() {
  console.log({ ...golsJsonField.value })
  golsJsonField.value.id = calcID()
  allGoals.value.push({ ...golsJsonField.value })
  console.log(allGoals.value)
}
function removerGol(index) {
  console.log(index)
  allGoals.value.splice(index - 1, 1)
}

function acharJogador(jogadorID) {
  return jogadorStore.jogadores.find((j) => j.id === jogadorID)?.nome
}
function acharTime(timeID) {
  return timeStore.times.find((t) => t.id === timeID)?.nome
}
</script>

<template>
  <div :class="timeStore.isLoading ? 'loading' : 'notLoading'">
    <svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  </div>

  <div :class="timeStore.isLoading ? 'notLoading' : 'container'">
    <form @submit.prevent="salvar(newObject)">
      <H1>INFOS</H1>
      <div class="infosSection">
        <div class="infosDiv">
          <div class="inputdiv">
            <label for="timeM">Time Mandante</label>
            <select name="" id="" v-model="newObject.time_mandante">
              <option v-for="time in timeStore.times" :key="time" :value="time.id">
                {{ time.nome }}
              </option>
            </select>
          </div>

          <div class="inputdiv">
            <label for="timeV">Time Visitante</label>
            <select name="" id="" v-model="newObject.time_visitante">
              <option v-for="time in timeStore.times" :key="time" :value="time.id">
                {{ time.nome }}
              </option>
            </select>
          </div>
        </div>

        <div class="infosDiv">
          <div class="inputdiv">
            <label for="data">Data</label>
            <input type="date" v-model="newObject.data" />
          </div>
          <div class="inputdiv">
            <label for="horario">Horario</label> <input type="time" v-model="newObject.horario" />
          </div>
        </div>

        <div class="infosDiv">
          <div class="inputdiv">
            <label for="local">Local</label>
            <input type="text" v-model="newObject.endereco" />
          </div>
          <div class="inputdiv">
            <label for="rodada">Rodada</label> 
            <select name="" id="" v-model="newObject.rodada">
              <option v-for="rodada in rodadaStore.rodadas" :key="rodada" :value="rodada.id">
                {{ rodada.numero_rodada }}
              </option>
            </select>

          </div>
        </div>
      </div>

      <H1>GOLS</H1>
      <div class="golsSection">
        <div class="inputdiv">
          <label for="marcadorGol">Marcador</label>
          <select name="" id="" v-model="golsJsonField.jogador">
            <option v-for="jogador in selectJogadores" :key="jogador.id" :value="jogador.id">
              {{ jogador.nome }} ({{ jogador.id }})
            </option>
          </select>
        </div>

        <div class="inputdiv">
          <label for="timeMarcador">Time Marcador</label>
          <select name="" id="" v-model="golsJsonField.time">
            <option v-for="time in selectTimes" :key="time.id" :value="time.id">
              {{ time.nome }} ({{ time.id }})
            </option>
          </select>
        </div>

        <button type="button" @click="salvarGols()">OK</button>
      </div>

      <div class="golsList">
        <div v-for="gol in allGoals" :key="gol" class="golDiv">
          <div>{{ acharJogador(gol.jogador) }}</div>
          <div>{{ acharTime(gol.time) }}</div>
          <div>{{ gol.gol_pro }}</div>
          <div class="buttons">
            <div class="squareButton" @click="removerGol(gol.id)" > {{gol.id}} </div>
          </div>
        </div>
      </div>

      <input type="submit" class="saveButton"> 
    </form>
  </div>
  <h1>Jogo Listagem</h1>
  <ul>
    <li v-for="jogo in jogoStore.jogos" :key="jogo" @click="editar(jogo)">
      <JogoComponent
        :key="jogo?.id"
        :data="jogo?.data"
        :endereco="jogo?.endereco"
        :horario="jogo?.horario"
        :time-m="jogo?.time_mandante"
        :time-v="jogo?.time_visitante"
        :escudo-m="jogo?.time_mandante.escudo.url"
        :escudo-v="jogo?.time_visitante.escudo.url"
        :gols="jogo?.gols"
        :id="jogo?.id"
      ></JogoComponent>
      <p>id: {{ jogo?.id }}</p>
      <p>data: {{ jogo?.data }}</p>
      <p>horario: {{ jogo?.horario }}</p>
      <p>endereco: {{ jogo?.endereco }}</p>
      <p>rodada: {{ jogo?.rodada }}</p>
      <p>time mandante: {{ jogo?.time_mandante }}</p>
      <p>time visitante: {{ jogo?.time_visitante }}</p>
      <p>gols: {{ jogo?.gols }}</p>
      <p>cartoes: {{ jogo?.cartoes }}</p>
      <hr />
    </li>
  </ul>
  <input type="number" v-model="deleteID" />
  <button @click="jogoStore.deleteJogo(deleteID)">delete</button>
</template>

<style scoped>
.saveButton {
  height: 54px;
  width: 100px;
  background-color: #E72740;
  border-radius: 15px;
  color: white;
  font-weight: 700;
}
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
}
.golsList{
  display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-end;
}
.buttons {
  display: flex;
  gap: 15px;
}
.squareButton {
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 15px;
}
.golDiv {
  display: flex;
  gap: 15%;
  width:  600px;
  height: 54px;
  background-color: #161616;
  border-radius: 15px;
  align-items: center;
  padding: 0px 20px 0px 20px;
  font-size: 18px;
  color: #757575;
  font-weight: 700;
  justify-content: center;
}

.container {
  width: 805px;
  height: 100%;
  background-color: #1e1e1e;
  border-radius: 15px;
  padding: 25px;

  & h1 {
    font-size: 18px;
    font-weight: 800;
    padding-bottom: 10px;
  }
}

input,
select {
  height: 54px;
  background-color: #161616;
  outline: 0;
  border: 0;
  border-radius: 15px;
  color: #757575;
}
option {
  background-color: #1e1e1e;
}

.inputdiv {
  display: flex;
  flex-direction: column;
}

::-webkit-calendar-picker-indicator {
  display: none;
}

.infosSection {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.golsSection {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: flex-end;
  & .inputdiv {
    width: 240px;
  }
}

.infosDiv {
  display: flex;
  justify-content: start;
  gap: 30px;
  & .inputdiv {
    width: 340px;
  }
}

label {
  margin-left: 15px;
}

button {
  height: 54px;
  width: 54px;
  background-color: white;
  border: none;
  border-radius: 15px;
}

svg {
  width: 3.25em;
  transform-origin: center;
  animation: rotate4 2s linear infinite;
}
circle {
  fill: none;
  stroke: hsl(0, 0%, 100%);
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash4 1.5s ease-in-out infinite;
}
@keyframes rotate4 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash4 {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
.notLoading {
  display: none;
  transition: 5ms;
}
.loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgb(32, 32, 32);
  transition: 5ms;
  display: flex;
  align-content: center;
  justify-content: center;
}
p,
h1,
h3,
h4,
h2,
label {
  color: white;
}
</style>
