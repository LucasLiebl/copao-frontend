<script setup>
const props = defineProps({
  datas: {
    type: Array,
    required: true
  },
  titulo: {
    type: String,
    required: true,
    default: 'Artilheiros'
  },
  id: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <h4 class="titulo">{{ props.titulo }}</h4>
    <div class="objetos">
      <div class="object" v-for="object in props.datas.slice(0, 6)" :key="object">
        <img :src="object.times[0].escudo" alt="">
        <h4> {{ object.nome }} </h4>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  width: 263px;
  height: 420px;
  border-radius: 15px;
  padding: 15px;
  gap: 12px;}
.titulo {
  color: white;
}
h4 {
  font-size: 18px;
  font-weight: 400;
}
.object {
  color: #757575;
  display: flex;
  align-items: center;
  gap: 3px;
  text-decoration: none
}
.objetos {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 45px;
}
img {
  width: 29px;
}
</style>
