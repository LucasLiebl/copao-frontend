<script setup>

defineEmits(['selecionarPosicao'])

const props = defineProps ({
  posicao:
  {type: String},
  id:{
    type: String
  }
})


</script>
<template>
        <button @click="$emit('selecionarPosicao', props.id)">
          {{ props.posicao }}
        </button>
</template>

<style scoped>

.elenco-container {
  background-color: #2c2c2c;
  display: flex;
  flex-direction: column;
  padding: 20px;
}



button {
  background-color: #4f4f4f;
  color: white;
  border: none;
  width: 200px;
  height: 38px;
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
