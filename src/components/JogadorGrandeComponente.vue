<script setup>
import { defineProps, computed, onMounted } from 'vue'
import Soccer from 'vue-material-design-icons/Soccer.vue'
import { useTimeStore } from '@/stores';
import router from '@/router';

const timeStore = useTimeStore()

onMounted(async () => {
  await timeStore.getTimes()
})

const props = defineProps({
  data: {
    type: Object
  },
  foto: {
    type: Image,
  },
})

function posicao(number) {
  if (number == 1) {
    return 'Goleiro'
  } else if (number == 2) {
    return 'Fixo'
  } else if (number == 3) {
    return 'Ala'
  } else if (number == 4) {
    return 'Pivo'
  }
}

const timeAtual = computed(() =>
  props.data.times && props.data.times[0] && props.data.times[0].time
    ? props.data.times[(props.data.times).length - 1].time.nome
    : 'N/A'
)

const timesPassou = computed(() =>
  props.data.times && props.data.times.length > 0
    ? props.data.times.map((item) => (item.time && item.time.nome ? item.time.nome : 'N/A'))
    : []
)

function marcouPor(time) {
  return timeStore.times.filter((t) => t.id === time)[0]
}
function verJogo(jogo){
  router.push(`/jogo/${jogo}`)
}



</script>
<template>
  <div class="jogadorGrandeComponent">
    <h2>Perfil do Jogador:</h2>
    <div class="jogador">
      <div class="fotoJogador">
        <img :src="props.foto" alt="" />
      </div>

      <div class="infoJogador">
        <div class="info">
          <h4>Nome:</h4>
          <h3>{{ props.data.nome }}</h3>
        </div>
        <div class="info">
          <h4>Time Atual:</h4>
          <h3>{{ timeAtual }}</h3>
        </div>
        <div class="info">
          <h4>Times que já passou:</h4>
          <h3 v-for="(team, index) in timesPassou" :key="index">{{ team }}</h3>
          <h3 v-if="timesPassou.length === 0">Nenhum time registrado</h3>
        </div>
        <div class="info">
          <h4>Numero:</h4>
          <h3>{{ props.data.numero }}</h3>
        </div>
        <div class="info">
          <h4>Posição:</h4>
          <h3>{{ posicao(props.data.posicao) }}</h3>
        </div>
        <div class="info">
          <h4>Gols:</h4>
          <h3>{{ props.data.gols ? props.data.gols.length : 0 }}</h3>
        </div>
      </div>
    </div>
    <div class="gols">
      <div class="golsTitulo">
        <h2>Gols</h2>
        <Soccer class="bola" style="color: white;"></Soccer>
      </div>

        <table class="golsTable">
            <thead>
                <tr>
                    <td>DATA</td>
                    <td>POR</td>
                    <td>TIME MANDANTE</td>
                    <td>TIME VISITANTE</td>
                    <td>ENDERECO</td>
                    <td>TIPO DO JOGO</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="gol in props.data.gols" :key="gol" class="trDados" @click="verJogo(gol.jogo)">
                    <td>{{gol.data}}</td>
                    <td><img :src="marcouPor(gol.time).escudo.url" alt="" class="img"></td>
                    <td>{{ gol.time_mandante.nome }}</td>
                    <td>{{ gol.time_visitante.nome }}</td>
                    <td>{{ gol.endereco }}</td>
                    <td>{{ gol.tipo_jogo }}</td>
                </tr>
                

            </tbody>
        </table>
    </div>
  </div>
</template>
<style scoped>
h2{
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 600;
}
table{
    border-collapse: separate; /* Set to 'separate' to make 'border-spacing' work */
    width: 100%;
    border-spacing: 0px 1rem;

}
tr{
    color: #757575;
    cursor: pointer;
    text-align: center;

}
.trDados{
    background-color: #303030;
    color: rgb(255, 255, 255);
}
.img{
    width: 1.4vw;
}
.jogadorGrandeComponent {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
    width: 95%;
    height: 95%;
  border-radius: 15px;
  gap: 5%;
}
.jogador {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  height: 60%;
  border-radius: 15px;
  gap: 5%;
}
.fotoJogador {
    background-color: #303030;
  width: 30%;
  overflow: hidden;
  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.infoJogador {
  display: flex;
  flex-direction: column;
  gap: 2%;
}
.info {
  font-size: 1.3rem;
  & h4 {
    font-weight: 500;
    color: #757575;
  }
  & h3 {
    font-weight: 500;
    color: white;
  }
}
.golsTitulo {
  display: flex;
  align-items: center;
  gap: 0.7%;
}
.bola {
  display: flex;
}
</style>
