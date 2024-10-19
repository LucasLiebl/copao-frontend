<script setup>
const props = defineProps({
  datas: {
    type: Array,
    required: true
  },
  titulo: {
    type: String,
    required: true,
    default: 'Times Copão'
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
    
        <RouterLink class="object" v-for="object in props.datas" :key="object" :to="`/todos/${object.id}`">
          <img :src="object.escudo.url" alt="" />
          <h4>{{ object.nome }}</h4>
        </RouterLink>
    </div>
  </div>
</template>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  width: 263px;
  height: 386px;
  border-radius: 15px;
  padding: 15px;
  gap: 28px;
}
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
  gap: 20px;
  margin-left: 60px;
}
img {
  width: 29px;
}
</style>
