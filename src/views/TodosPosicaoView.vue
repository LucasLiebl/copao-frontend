<script setup>
import { ref, onMounted } from 'vue'
import CardJogador from '@/components/CardJogador.vue'
import { useTimeStore } from '@/stores'
import BotaoJogador from '@/components/BotaoJogador.vue'

const props = defineProps(['id'])
const timeStore = useTimeStore()
const posicaoSelecionada = ref(0)

onMounted(async () => {
  if (props.id) {
    await timeStore.getTime(props.id)
  }
})

const posicao = {
  1: 'Goleiro',
  2: 'Fixo',
  3: 'Ala',
  4: 'Pivo'
}

function selecionarPosicao(posicao) {
  posicaoSelecionada.value = posicao
}

function mostrar(posicao) {
  return posicao == posicaoSelecionada.value || posicaoSelecionada.value == 0
}

const categories = [
  { id: 0, texto: 'TODOS' },
  { id: 1, texto: 'GOLEIROS' },
  { id: 2, texto: 'FIXOS' },
  { id: 3, texto: 'ALAS' },
  { id: 4, texto: 'PIVOS' }
]
</script>

<template>
  <div class="jogadores-container">
    <div class="sizecontainer">
    <h1 class="elenco"> Elenco {{ timeStore.time.nome }} </h1>
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
        <div v-for="item in timeStore.time.jogadores" :key="item.jogador.id" >
          <CardJogador
            :nome="item.jogador.nome"
            :numero="item.jogador.numero"
            :posicao="posicao[item.jogador.posicao]"
            v-if="mostrar(item.jogador.posicao)"
          />
        </div>
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
  font-size: 32px;
  font-weight: 500;
  color: white
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


.posicao-container > h1 {
  margin-left: 0px;
  text-align: left;
}
</style>
