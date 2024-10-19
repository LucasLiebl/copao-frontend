<script setup>
import dateFormat from "dateformat";

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
    escudoM:{
        type : String
    },
    escudoV:{
        type : String
    }
})
</script>
<template>
<div class="jogoComponent">
<div class="dataJogo">
    <p> {{dateFormat(props.data, "dd/mm")}} · {{ props.endereco }} · {{props.horario.slice(0,5)}} </p>
</div>
<div class="times">
    <div class="timeM">
        <h1>{{props.timeM}}</h1>
        <div class="escudoTime">
            <img :src="props.escudoM" alt="">
        </div>
    </div>
    <div class="placar">
        <h1> 0 </h1>
        <h1 class="versus"> x </h1>
        <h1> 0 </h1>

    </div>
    <div class="timeV">
        <div class="escudoTime">
            <img :src="props.escudoV" alt="">
        </div>
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
    font-size: 30px;
    font-weight:500;
   } 
}
img{
    width: 100%;
}
.timeV{
   display: flex;
   align-items: center;
   justify-content: flex-start;
   gap: 22px;
   color: white;
   width: 350px; 
}
.timeM{
    display: flex;
   align-items: center;
   justify-content: flex-end;
   gap: 22px;
   color: white;
   width: 350px; 
}
.escudoTime{
    width: 92px;
    height: 92px;
    border-radius: 25px;
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