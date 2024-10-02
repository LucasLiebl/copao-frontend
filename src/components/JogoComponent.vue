<script setup>
import dateFormat, { masks } from "dateformat";

const props = defineProps ({
    data : {
        type: String
    },
    horario : {
        type: String
    },
    endereco : {
        type: String
    },
    foto : {
        type: Image
    },
    timeM : {
        type : String
    },
    timeV : {
        type : String
    },
})

</script>
<template>
<div class="jogoComponent">
<div class="dataJogo">
    <p> {{props.data}} · {{ props.endereco }} · {{props.horario}} </p>
</div>
<div class="times">
    <div class="time">
        <h1>{{props.timeM}}</h1>
        <div class="escudoTime"></div>
    </div>
    <div class="placar">
        <h1> 0 </h1>
        <h1 class="versus"> x </h1>
        <h1> 0 </h1>

    </div>
    <div class="time">
        <div class="escudoTime"></div>
        <h1>{{props.timeV}}</h1>
    </div></div>
</div>
</template>
<style scoped>
.jogoComponent{
    width: 1000px;
    height: 150px;
    background-color: #161616;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
}
.dataJogo{
font-size: 16px;
font-weight: 500;
color: #757575;
}
.times{
    display: flex;
    align-items: center;
    gap: 22px;
    & h1{
    font-size: 38px;
    font-weight:600;
   } 
}
.time{
   display: flex;
   align-items: center;
   gap: 22px;
   color: white; 
}
.escudoTime{
    width: 92px;
    height: 92px;
    border-radius: 25px;
    background-color: rgb(151, 12, 12);
}
.placar{
    display: flex;
    gap: 20px;
    color: white;
    & .versus{
        color: #757575;
    }
}
</style>