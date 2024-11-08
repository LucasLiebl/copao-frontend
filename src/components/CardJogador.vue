<script setup>
import { onMounted } from 'vue'
import { useJogadorStore } from '@/stores'

const jogadorStore = useJogadorStore()

onMounted(() => {
  jogadorStore.getJogadores()
})

const props = defineProps({
  nome: {
    type: String
  },
  numero: {
    type: String
  },
  posicao: {
    type: String
  },
  foto: {
    type: Image,
    default: '../../public/default-player.png'
  }
})
</script>

<template>
  <div class="Card-Jogador">
   <img :src="props.foto" alt="" />

    <div class="Nome-Jogador">
      <h1>{{ props.numero }}</h1>
      <div class="Nome-Posicao">
        <h3>{{ props.nome }}</h3>
        <h4>{{ props.posicao }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Card-Jogador {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: #404040;
  width: 260px;
  height: 420px;
  border-radius: 15px;
}
.Card-Jogador h1 {
  color: black;
  font-weight: 800;
  font-size: 2.5rem;
}
.Card-Jogador h3 {
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: -5px;
}
.Card-Jogador h4 {
  font-weight: 700;
  font-size: 0.75rem;
  color: #5f5f5f;
}
.Nome-Jogador {
  display: flex;
  justify-content: flex-start;
  background-color: #d9d9d9;
  width: 260px;
  height: 51px;
  border-radius: 0px 0px 10px 10px;
  gap: 10px;
  padding-left: 20px;
  align-items: center;
}
.Nome-Posicao {
  display: flex;
  flex-direction: column;
  color: black;
  align-items: flex-start;
}
.imgDiv{
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
img {
object-fit: cover;
height: 100%;
overflow: hidden;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
}
</style>
