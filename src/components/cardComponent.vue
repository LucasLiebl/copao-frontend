<script setup>
const times =[
        { name: 'Vermelho', icon:('../../public/vermelho1.png') },
        { name: 'Vermelho', icon:('../../public/vermelho1.png') },
        { name: 'Vermelho', icon:('../../public/vermelho1.png') },
        { name: 'Vermelho', icon:('../../public/vermelho1.png') },
        { name: 'Vermelho', icon:('../../public/vermelho1.png') }
      ]

</script>

<template>

    <div class="card">
        <h1>times copão</h1>
        <div class="time" v-for="time in times" :key="time">
            {{ time.icon }} {{ time.name }}
        </div>
    
    
    
    </div>
</template>
<style>
.card{
    background-color: #1E1E1E;
    width: 263px;
    height: 386px;
    border-radius: 15px;
}
.card>h1{
    font-size: 18px;
    color: white;
    padding: 10px 15px;
}
.time{
color: aliceblue;
}
</style>