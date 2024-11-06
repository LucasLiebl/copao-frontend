  <script setup>
import { computed } from 'vue';

  const props = defineProps({
    times:{
      type: Object
    }
  })

  const sortedTimes = computed(() => {
  return [...props.times].sort((a, b) => b.pontos - a.pontos); // Ordena em ordem decrescente de pontos
});
  </script>
<template>
  <div class="table-page">
  
    <table>
      <thead>
        <tr>
          <th>Pos</th>
          <th>Time</th>
          <th>P</th>
          <th>J</th>
          <th>V</th>
          <th>E</th>
          <th>D</th>
          <th>GP</th>
          <th>GC</th>
          <th>SG</th>
          <th>%</th>
          <th>ult. jogos</th>
        </tr>
      </thead>
      <tbody>
     <tr v-for="(time, index) in sortedTimes" :key="index">
          <td> <span>{{ sortedTimes.indexOf(time) + 1 }}º </span> </td>
          <td style="font-weight: 900">
            <div class="nomeTime-box">
              <span
                :class="
                  (sortedTimes.indexOf(time) + 1) <= 8 && (sortedTimes.indexOf(time) + 1) + 1 >= 6
                    ? 'zona-r'
                    : (sortedTimes.indexOf(time) + 1) <= 5 && (sortedTimes.indexOf(time) + 1) >= 4
                    ? 'zona-n'
                    : 'zona-c'
                "
              >
              </span>

              <span style="display: flex;"><img style="width: 4vh" :src="time.escudo.url" alt="" /></span>

              <span>{{ time.nome }}</span>
            </div>
          </td>
          <td class="marks">{{ (time.pontos) }}</td>
          <td>{{ time.jogos }}</td>
          <td class="marks">{{ time.vitoria + time.empate + time.derrota }}</td>
          <td>{{ time.vitoria }}</td>
          <td class="marks">{{ time.empate }}</td>
          <td>{{ time.derrota }}</td>
          <td class="marks">{{ time.gols_pro }}</td>
          <td>{{ time.gols_contra }}</td>
          <td class="marks">{{ (time.vitoria/(time.vitoria + time.empate + time.derrota) * 100).toFixed(0) }}</td>
          <td class="ult_jogos">
            <span
            v-for="jogo in time.ultimos_jogos"
              :key="jogo.legth"
              :class="jogo == '1' ? 'v' : jogo == '-1' ? 'd' : 'e'"
            >
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
h1 {
  color:white;
  padding: 54px 0px 0px 0px;
  text-align: start;
  font-weight: 900;
}

.nomeTime-box {
  display: flex;
  align-items: center;
  gap: 1vw;
}
.zona-r {
  display: block;
  width: 2px;
  height: 2vh;
  background-color: red;
}
.zona-n {
  display: block;
  width: 2px;
  height: 2vh;
  background-color: grey;
}
.zona-c {
  display: block;
  width: 2px;
  height: 2vh;
  background-color: green;
}
.ult_jogos {
  display: flex;
  height: 6vh;
  align-items: center;
  justify-content: space-evenly;
}
.v {
  width: 1.1vh;
  height: 1.1vh;
  background-color: green;
  border-radius: 50%;
  content: '';
  display: block;
}
.e {
  width: 1.1vh;
  height: 1.1vh;
  background-color: grey;
  border-radius: 50%;
  content: '';
  display: block;
}
.d {
  width: 1.1vh;
  height: 1.1vh;
  background-color: rgb(128, 0, 0);
  border-radius: 50%;
  content: '';
  display: block;
}

.table-page {
  width: 70vw;
  background-color: #1E1E1E;
  border-radius: 15px;
}
tr {
  text-align: center;
  border-bottom: solid 1px #ddd;
  height: 6vh;
  width: 60vw;
}

table {
  color:white;
  border-top: 1px solid #ddd;
  border-collapse: collapse;
}
.marks {
}

th {
  padding: 5px 10px;
}
</style>
