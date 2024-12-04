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
  <div class="jogadores-container">
    <div class="sizecontainer">
    <h1 class="elenco"> <img class="img" :src="timeStore.time.escudo?.url" alt=""> Elenco {{ timeStore.time.nome }} </h1>
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
      <CardJogador
            v-for="item in jogadores" :key="item.id" 
            :foto="item?.foto"      
            :nome="item?.nome"
            :numero="item?.numero"
            :posicao="categories.find(c => c.id == item.posicao)?.texto"
          />
    </div>
  </div>
  </div>
</template>

<style scoped>
.sizecontainer{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
</style>
