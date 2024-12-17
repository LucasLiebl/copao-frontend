<script setup>
import ShieldStar from 'vue-material-design-icons/ShieldStar.vue'
const props = defineProps({
  datas: {
    type: Array,
    required: true
  },
  titulo: {
    type: String,
    required: true,
    default: 'Times Copão'
  }
})
function primeiraLetraMaiuscula(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
</script>

<template>
  <div class="card">
    <h4 class="titulo">{{ props.titulo }}
    <ShieldStar class="icon"/>
    </h4>
    <div class="objetos">
    
        <RouterLink class="object" v-for="object in props.datas" :key="object" :to="`/time/${object.id}`">
          <img :src="object?.escudo?.url" alt="" />
          <h4>{{ primeiraLetraMaiuscula(object.nome) }}</h4>
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
  height: 420px;
  border-radius: 15px;
  padding: 15px;
  gap: 12px;
  }
  .titulo {
  color: white;
  display: flex;
  align-items: center;
  gap:4%;
}
.icon{
  display: flex;
}
h4 {
  font-size: 18px;
  font-weight: 400;
}
.object {
  color: #757575;
  display: flex;
  align-items: center;
  gap: 4%;
  text-decoration: none;
}
.objetos {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
img {
  width: 29px;
}
</style>
