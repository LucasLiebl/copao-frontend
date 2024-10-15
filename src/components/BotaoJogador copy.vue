<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

defineEmits(['selecionarPosicao'])

const categories = [
  { id: 0, texto: 'TODOS' },
  { id: 1, texto: 'GOLEIROS' },
  { id: 2, texto: 'FIXOS' },
  { id: 3, texto: 'ALAS' },
  { id: 4, texto: 'PIVOS' }
]

const selectedCategory = ref('TODOS')

const router = useRouter()
const route = useRoute()

const selectCategory = (category) => {
  selectedCategory.value = category

  router.push({ name: category.toLowerCase() })
}

selectedCategory.value = route.name ? route.name.toUpperCase() : 'TODOS'
</script>
<template>
  <div class="elenco-container">
    <h1 class="title">Elenco</h1>
    <div class="butaos-container">
        <button v-for="category in categories" :key="category.id" @click="$emit('selecionarPosicao', category.id)">
          {{ category.texto }}
        </button>
    </div>
  </div>
</template>

<style scoped>
.butaos-container{
  display: flex;
  flex-direction: row;
}
.elenco-container {
  background-color: #2c2c2c;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
}



button {
  background-color: #4f4f4f;
  color: white;
  border: none;
  width: 200px;
  height: 60px;
  font-size: 25px;
  cursor: pointer;
  border-radius: 15px;
  margin-left: 20px;
  margin-right: 20px;
  
}

button.active {
  background-color: #e5e5e5;
  color: black;
}

button:not(.active):hover {
  background-color: #6f6f6f;
}

.title {
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 61px;
}
</style>

