<script setup>
import { ref, onBeforeMount, computed } from 'vue'
import CardJogador from '@/components/CardJogador.vue'
import { useTimeStore } from '@/stores'
import BotaoJogador from '@/components/BotaoJogador.vue'

const props = defineProps(['id'])
const timeStore = useTimeStore()
const posicaoSelecionada = ref(0)

onBeforeMount(async () => {
  if (props.id) {
    await timeStore.getTime(props.id)
  }
})

function selecionarPosicao(posicao) {
  posicaoSelecionada.value = posicao
}

const categories = [
  { id: 0, texto: 'TODOS' },
  { id: 1, texto: 'GOLEIROS' },
  { id: 2, texto: 'FIXOS' },
  { id: 3, texto: 'ALAS' },
  { id: 4, texto: 'PIVOS' }
]
const jogadores = computed(() => {
  if (posicaoSelecionada.value === 0) {
    return timeStore.time.jogadores
  } else {
    return  timeStore.time.jogadores.filter((j) => j.posicao === posicaoSelecionada.value)
  }
})
</script>

<template>
  <div  :class="timeStore.isLoading ? 'loading' : 'notLoading'">
    <svg viewBox="25 25 50 50" >
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  </div>
  <div :class="timeStore.isLoading ? 'notLoading' : 'jogadores-container'">
    <div class="sizecontainer">
    <h1 class="elenco"> <img class="img" :src="timeStore.time.escudo?.url" alt=""> {{ timeStore.time.nome }} </h1>
    <div class="buttons-posicao">
      <BotaoJogador 
      v-for="category in categories" :key="category.id"
        @selecionarPosicao="selecionarPosicao"
        :posicao="category.texto"
        :id="category.id"
        :posicaoSelecionada="posicaoSelecionada"
      >
      </BotaoJogador>
  </div>
    <div class="posicao-container">
      <router-link  v-for="item in jogadores" :key="item.id" :to="`/jogador/${item.jogador.id}`" class="card-router">
          <CardJogador
            :key="item.id" 
            :foto="item.jogador?.foto"      
            :nome="item.jogador.nome"
            :numero="item.jogador.numero"
            :posicao="categories.find(c => c.id == item.jogador.posicao)?.texto"
          />
      </router-link>
      
    </div>
  </div>
  </div>
</template>

<style scoped>
.card-router{
  text-decoration: none;
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
.notLoading{
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
  justify-content: center
  
}

.sizecontainer{
  display: flex;
  flex-direction: column;
  margin-left:110px;
  margin-right: 110px;
  gap: 40px ;
}
.elenco{
  display: flex;
  font-size: 32px;
  font-weight: 500;
  color: white;
  align-items: center;
  gap: 10px;
}
.buttons-posicao{

  display: flex;
  flex-direction: row;
  gap: 20px;
}
.jogadores-container {
  width: 1351px;
  margin: 44px;
  background-color: #1e1e1e;
  border-radius: 10px;
  padding-bottom: 42px;
  padding-top: 42px;
}
.posicao-container {
  margin-top: 20px;
  display: flex;
  gap: 30px ; 
  flex-wrap: wrap;
  justify-content: space-between;
  }
.img{height: 40px;}

.posicao-container > h1 {
  margin-left: 0px;
  text-align: left;
}
@media screen and (max-width: 768px) {
  .posicao-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .buttons-posicao {
    display: flex;
    flex-direction: column; 
    gap: 15px; 
    align-items: center; 
  }
  .jogadores-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .jogadores-container{
    width: 100%; 
    margin-left: 0px;
    margin-right: 0px; 
    margin-top: 20px; 
    gap: 15px;
    padding: 5px;
    align-items: center;
  }
}
</style>
