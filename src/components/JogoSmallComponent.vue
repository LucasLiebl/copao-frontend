<script setup>
import dateFormat from 'dateformat'

const props = defineProps({
  horario: {
    type: String,
    default: ''
  },
  data: {
    type: String,
    default: ''
  },
  endereco: {
    type: String,
    default: ''
  },
  foto: {
    type: Image
  },
  timeM: {
    type: Object
  },
  timeV: {
    type: Object
  },
  escudoM: {
    type: String,
    default: ''
  },
  escudoV: {
    type: String,
    default: ''
  },
  gols: {
    type: Array
  },
  id: {
    type: String,
    Required: true
  },
  tipo: {
    type: String
  }
})
</script>
<template>
  <RouterLink class="jogoComponent" :to="`/jogo/${props.id}`">
    <div class="dataJogo">
      <p>
        {{ dateFormat(props.data, 'dd/mm') }} · {{ props.endereco ? props.endereco : "Local não definido" }} ·
        {{ props.horario ? props.horario.slice(0, 5) : "Horário não definido" }}
      </p>
    </div>
    <div class="times">
      <div class="timeM">
        <div class="escudoTime">
          <img :src="props.escudoM" alt="" />
        </div>
      </div>
      <div class="placar">
        <h1>{{ gols ? gols.filter((g) => g?.time == timeM?.id).length : [].length }}</h1>
        <h1 class="versus">x</h1>
        <h1>{{ gols ? gols.filter((g) => g?.time == timeV?.id).length : [].length }}</h1>
        <div>{{ props.tipo }}</div>
      </div>
      <div class="timeV">
        <div class="escudoTime">
          <img :src="props.escudoV" alt="" />
        </div>
      </div>
    </div>
  </RouterLink>
</template>
<style scoped>
.jogoComponent {
  width: 500px;
  height: 150px;
  background-color: #161616;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  text-decoration: none;
}
.dataJogo {
  font-size: 16px;
  font-weight: 500;
  color: #757575;
}
.times {
  display: flex;
  align-items: center;
  gap: 22px;
  & h1 {
    font-size: 30px;
    font-weight: 500;
  }
}
img {
  width: 100%;
}
.timeV {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 22px;
  color: white;
  width: 350px;
}
.timeM {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 22px;
  color: white;
  width: 350px;
}
.escudoTime {
  width: 92px;
  height: 92px;
  border-radius: 25px;
}
.placar {
  display: flex;
  gap: 20px;
  color: white;
  & .versus {
    color: #757575;
  }
}
</style>
