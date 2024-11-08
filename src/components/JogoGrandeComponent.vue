<script setup>
import { onBeforeMount, ref } from "vue";
import dateFormat from "dateformat";
import { useJogadorStore } from "@/stores";

const jogadorStore = useJogadorStore()

onBeforeMount(() => {
  jogadorStore.getJogadores()
})

const props = defineProps({
  data: {
    type: String,
    default: ""
  },
  horario: {
    type: String,
    default: ""
  },
  endereco: {
    type: String,
    default: ""
  },
  foto: {
    type: String,
    default: ""
  },
  timeM: {
    type: Object,
    default: () => ({ nome: "", id: null, escudo: "" })
  },
  timeV: {
    type: Object,
    default: () => ({ nome: "", id: null, escudo: "" })
  },
  escudoM: {
    type: String,
    default: ""
  },
  escudoV: {
    type: String,
    default: ""
  },
  gols: {
    type: Array,
    default: () => []
  }
});




</script>
<template>
  <div class="jogoComponent">
    <div class="dataJogo">
      <p>
        {{ dateFormat(props.data, 'dd/mm') }} · {{ props.endereco }} ·
        {{ props.horario.slice(0, 5) }}
      </p>
    </div>
    <div class="times">
      <div class="timeM">
        <div class="escudoTime">
          <img :src="props.escudoM" alt="" />
        </div>
        <h1>{{ props.timeM.nome }}</h1>
      </div>
      <div class="placar">
        <h1>{{ gols ? gols.filter((g) => g?.time == timeM?.id).length : [].length }}</h1>
        <h1 class="versus">-</h1>
        <h1>{{ gols ? gols.filter((g) => g?.time == timeV?.id).length : [].length }}</h1>
      </div>
      <div class="timeV">
        <h1>{{ props.timeV.nome }}</h1>
        <div class="escudoTime">
          <img :src="props.escudoV" alt="" />
        </div>
      </div>
    </div>

    <div class="gols">
      {{}}
    </div>
  </div>
</template>
<style scoped>
.jogoComponent {
  width: 1200px;
  height: 300px;
  background-color: #1e1e1e;
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
  align-items: flex-start;
  & h1 {
    font-size: 20px;
    font-weight: 500;
  }
}
img {
  width: 100px;
}
.timeV {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  color: white;
  width: 350px;
  height: 60px;
  background-color: #303030;
  border-radius: 0px 40px 40px 0px;
}
.timeM {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  color: white;
  width: 350px;
  height: 60px;
  background-color: #303030;
  border-radius: 40px 0px 0px 40px;
}
.timeV {
}
.escudoTime {
  width: 92px;
  height: 92px;
  border-radius: 25px;
}
.placar {
  display: flex;
  gap: 10px;
  border-radius: 0px 0px 15px 15px;
  background-color: #161616;
  color: white;
  width: 150px;
  height: 100px;
  justify-content: center;
  align-items: center;
  & .versus {
    color: #757575;
  }
  & h1 {
    font-size: 60px;
    font-weight: 700;
  }
}
</style>
