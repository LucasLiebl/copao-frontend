<script setup>
import { useWindowSize } from "@vueuse/core";
import dateFormat from "dateformat";

const props = defineProps({
  data: {
    type: String
  },
  horario: {
    type: String
  },
  endereco: {
    type: String
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
    type: String
  },
  escudoV: {
    type: String
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
  },
  realizado: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div>
  <RouterLink v-if="width > 768" class="jogoComponent" :to="`/jogo/${props.id}`">
    <div class="dataJogo">
      <p>
        {{ dateFormat(props.data, 'dd/mm') }} · {{ props.endereco ? props.endereco : "Local não definido" }} ·
        {{ props.horario ? props.horario.slice(0, 5) : "Horário não definido" }}
      </p>
    </div>
    <div class="times">
      <div class="timeM">
        <h1>{{ props.timeM?.nome }}</h1>
        <div class="escudoTime">
          <img :src="props.escudoM" alt="" />
        </div>
      </div>
      <div class="placar">
        <h1 v-if="props.realizado" >{{ gols ? gols.filter((g) => g?.time == timeM?.id).length : [].length }}</h1>
        <h1 v-else></h1>
        <h1 class="versus">x</h1>
        <h1 v-if="props.realizado">{{ gols ? gols.filter((g) => g?.time == timeV?.id).length : [].length }}</h1>
        <h1 v-else></h1>

      </div>
      <div class="timeV">
        <div class="escudoTime">
          <img :src="props.escudoV" alt="" />
        </div>
        <h1>{{ props.timeV?.nome }}</h1>
      </div>
    </div>
    <div class="tipoJogo"><p>{{ props.tipo }}</p></div>

  </RouterLink>

    <!-- Layout para Mobile -->
    <div v-else class="jogoComponentMobile">
      <RouterLink :to="`/jogo/${props.id}`">
        <div class="placarMobile">
          <!-- Time Visitante com imagem acima -->
          <div class="escudoTimeMobile">
            <img :src="props.escudoV" alt="Escudo do Time Visitante" />
          </div>
                      <h1>{{ props.timeV.nome }}</h1>

          <!-- Placar -->
          <div class="placarValues">
            <h1>{{ gols ? gols.filter((g) => g?.time == timeM?.id).length : [].length }}</h1>
            <h1 class="versus">x</h1>
            <h1>{{ gols ? gols.filter((g) => g?.time == timeV?.id).length : [].length }}</h1>
          </div>

          <!-- Time Mandante com imagem abaixo -->
          <h1>{{ props.timeM.nome }}</h1>
          <div class="escudoTimeMobile">
            <img :src="props.escudoM" alt="Escudo do Time Mandante" />
          </div>
        </div>

        <div class="dataJogoMobile">
          <p>{{ dateFormat(props.data, "dd/mm") }} · {{ props.endereco }}</p>
          <p>Horário: {{ props.horario.slice(0, 5) }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.jogoComponent {
  width: 1000px;
  height: 150px;
  background-color: #161616;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  justify-content: center;
}
.tipoJogo{
  color: #757575;
  outline: none;
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


/* Mobile */
.jogoComponentMobile {
  width: 100%;
  background-color: #161616;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  justify-content: center;
}

.jogoComponentMobile a {
  text-decoration: none;
  color: inherit;
}

.escudoTimeMobile {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
}

.placarMobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
}

.placarValues {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dataJogoMobile {
  text-align: center;
  color: #757575;
  font-size: 14px;
}

img {
  width: 100%;
  height: auto;
}
</style>
