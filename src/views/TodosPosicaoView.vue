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
    console.log(timeStore.time.jogadores.jogador)
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
    <div class="buttons-posicao">
    <div v-for="category in categories" :key="category.id">
      <BotaoJogador
        @selecionarPosicao="selecionarPosicao"
        :posicao="category.texto"
        :id="category.id"
      >
      </BotaoJogador>
    </div>
  </div>
    <div class="posicao-container">
      <h1>{{ posicao[posicaoSelecionada] }}</h1>
      <div class="jogadores-linha">
        <div v-for="item in timeStore.time.jogadores" :key="item.jogador.id" class="jogador-card">
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
.buttons-posicao{
  display: flex;
  flex-direction: row;
}
.jogadores-container {
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  border-radius: 10px;
}
.posicao-container {
  margin-bottom: 40px;
}
.jogadores-linha {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
h1 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #ffffff;
  text-align: center;
}

.posicao-container > h1 {
  margin-left: 0px;
  text-align: left;
}
</style>
