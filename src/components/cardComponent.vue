<script setup>
const props = defineProps({
  datas: {
    type: Object
  },
})

</script>

<template>

    <div class="card">
        <h1>times copão</h1>
        <div class="time" v-for="time in props.datas" :key="time">
            <img :src=time.image alt="">{{ time.name }}
        </div>
    
    
    
    </div>
</template>
<style>
.card{
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #1E1E1E;
    width: 263px;
    height: 386px;
    border-radius: 15px;
    margin: 100px;
}
.card>h1{
    font-size: 18px;
    color: white;
    padding: 10px 15px;
}
.time{
    color: #757575;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
</style>