<script setup>
import { computed } from 'vue'

const props = defineProps({
  times: {
    type: Object
  }
})

const sortedTimes = computed(() => {
  return [...props.times].sort((a, b) => b.pontos - a.pontos) // Ordena em ordem decrescente de pontos
})

console.log( "sorted times ",sortedTimes)
</script>
<template>
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
        <tr v-for="(time, index) in sortedTimes" :key="index" class="tr-dados">
          <td style="width: 70px">
            <div class="posicao">
              <span
                :class="
                  sortedTimes.indexOf(time) + 1 >= 5
                    ? 'zona-r'
                      : 'zona-c'
                "
              >
              </span>
              <span><h1>{{ sortedTimes.indexOf(time) + 1 }}º  </h1></span>
            </div>
          </td>

          <td style="font-weight: 900; width: 220px">
            <div class="nomeEscudo">
              <span style="display: flex"
                ><img style="width: 4vh" :src="time.escudo.url" alt=""
              /></span>

              <span> <h1>{{ time.nome.charAt(0).toUpperCase() + time.nome.slice(1) }}</h1></span>
            </div>
          </td>
          <td class="marks">{{ time.pontos }}</td>
          <td>{{ time.jogos.length }}</td>
          <td class="marks">{{ time.vitoria }}</td>
          <td>{{ time.empate }}</td>
          <td class="marks">{{ time.derrota }}</td>
          <td>{{ time.gols_pro }}</td>
          <td class="marks">{{ time.gols_contra }}</td>
          <td>{{ time.gols_pro - time.gols_contra }}</td>
          <td class="marks">
            {{ ((time.vitoria / (time.vitoria + time.empate + time.derrota)) * 100).toFixed(0) }}
          </td>
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
</template>
<style scoped>
table {
  width: 90%;
  border-collapse: separate; /* Set to 'separate' to make 'border-spacing' work */
  border-spacing: 0 20px; /* Adjust the second value for vertical spacing */
  border-radius: 15px;
  color: white;
  font-size: 17px;
}
h1{
  font-weight: 600;
  font-size: 17px;
}
th{
  color: #585858;
}
.tr-dados {
  background-color: #303030;
  text-align: center;
  height: 60px;
}
.nomeEscudo {
  display: flex;
  align-items: center;
  gap: 1vw;
}
.zona-r {
  display: block;
  width: 2px;
  height: 100%;
  background-color: red;
}
.zona-n {
  display: block;
  width: 2px;
  height: 100%;
  background-color: grey;
}
.zona-c {
  display: block;
  width: 2px;
  height: 100%;
  background-color: green;
}
.posicao {
  height: 60px;
    display: flex;
    gap: 30px;
    align-items: center;
}
.ult_jogos {
  display: flex;
  height: 60px;
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
</style>
