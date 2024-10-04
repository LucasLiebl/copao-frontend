<script setup>
const props = defineProps({
    datas: {
    type: Array,
    required: true,
    },
    titulo: {
        type: String,
        required: false,
        default: 'Times Copão'
    }
})

</script>

<template>

    <div class="card">
        <h1>{{ props.titulo }}</h1>
        <div class="object" v-for="object in props.datas" :key="object">
        {{ object.nome }}
        </div>
    
    
    
    </div>
</template>
<style>
.card{
    display: flex;
    flex-direction: column;
    background-color: #1E1E1E;
    width: 13.5vw;
    height: 37.6vh;
    border-radius: 15px;
margin: 50px 50px 0px 40px;

}
.card>h1{
    font-size: 18px;
    color: white;
    padding: 10px 15px;
}
.object{
    color: #757575;
    display: flex;
    margin-bottom: 10px;
    margin-left: 75px;
}
.object>img{
    width: 29px;
}

</style>