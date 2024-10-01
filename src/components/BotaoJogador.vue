<template>
  <div class="elenco-container">
    <h1 class="title">Elenco</h1>
    <div class="categories">
      <button
        v-for="category in categories"
        :key="category"
        :class="{ active: selectedCategory === category }"
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


// Definindo as categorias
const categories = ['TODOS', 'GOLEIROS', 'FIXOS', 'ALAS', 'PIVOS'];

// Estado reativo para a categoria selecionada
const selectedCategory = ref('TODOS');

// Função para alterar a categoria selecionada
const selectCategory = (category) => {
  selectedCategory.value = category;
};
</script>

<style scoped>
.elenco-container {
  background-color: #2c2c2c;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
}


.categories {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

button {
  background-color: #4f4f4f;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 15px;

}

button.active {
  background-color: #e5e5e5;
  color: black;
}

button:not(.active):hover {
  background-color: #6f6f6f;
}

/* Estilo do título "Elenco" acima da categoria "TODOS" */
.title {
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px; /* Distância entre o título e as categorias */ 
}
.elenco-container>h1{
  margin-left: 665px;
}


</style>
