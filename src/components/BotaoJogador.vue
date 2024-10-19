<script setup>

defineEmits(['selecionarPosicao'])

const props = defineProps ({
  posicao:
  {type: String},
  id:{
    type: String
  },
  posicaoSelecionada:{
    type: String
  }
})


</script>
<template>
        <button  :class="{'button buttonActive': props.posicaoSelecionada === props.id,'button ': props.posicaoSelecionada !== props.id}"

         @click="$emit('selecionarPosicao', props.id)">
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



.button {
  background-color: #1E1E1E;
  color: white;
  border: none;
  width: 200px;
  height: 38px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  transition: all .2s;
}
.button:hover{
  background-color: #D9D9D9;
  color: #1E1E1E;
}
.buttonActive{
  background-color: #D9D9D9;
  color: #1E1E1E;
}
.title {
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 61px;
}
</style>
