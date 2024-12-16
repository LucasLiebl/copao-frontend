<script setup>
import { useJogoStore } from '@/stores';
import { onMounted,ref } from 'vue';
import JogoSmallComponent from '@/components/JogoSmallComponent.vue';
import JogoComponent from '@/components/JogoComponent.vue';

const jogoStore = useJogoStore();
const semi = ref([])
const final = ref([])

onMounted(async () => {
    await jogoStore.getJogosbyTipo("Semi");
    semi.value = jogoStore.state.jogos
    console.log(jogoStore.state.jogos)
});
onMounted(async () => {
    await jogoStore.getJogosbyTipo("Final");
    final.value = jogoStore.state.jogos[0]
    console.log(jogoStore.state.jogos)
});
console.log(semi, final)
</script>
<template>
<div class="container">
    <div v-if="jogoStore.isLoading">
    <h1>Carregando...</h1>
  </div>
  <div v-else-if="semi.length === 0">
    <h1>NADA AINDA</h1>
  </div>
    <div v-else class="chaveamento-container"> 
        <div><img src="https://i.ibb.co/9VfWVgh/COPAO-1.png" alt="" /></div>
        <div class="final">
            <JogoComponent
                :data="final?.data"
                :endereco="final?.endereco"
                :horario="final?.horario"
                :time-m="final?.time_mandante"
                :time-v="final?.time_visitante"
                :escudo-m="final?.time_mandante?.escudo?.url"
                :escudo-v="final?.time_visitante?.escudo?.url"
                :gols="final?.gols"
                :id="final?.id"
                :tipo="final?.tipo_jogo"
                ></JogoComponent>
        </div>
        <div class="semi"><div v-for="jogo in semi" :key="jogo.id">
            <JogoSmallComponent 
            :data="jogo.data"
            :endereco="jogo.endereco"
            :horario="jogo.horario"
            :time-m="jogo.time_mandante"
            :time-v="jogo.time_visitante"
            :escudo-m="jogo.time_mandante.escudo?.url"
            :escudo-v="jogo.time_visitante.escudo?.url"
            :gols="jogo.gols"
            :id="jogo.id"
            :tipo="jogo.tipo_jogo"
            ></JogoSmallComponent>
        </div>
    </div>
        
    </div>
</div>
</template>
<style scoped>
.container {
  padding: 2.5%;
  display: flex;
  justify-content: center;
}
.chaveamento-container{
    display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1e1e;
  width: 100vw;
  height: 800px;
  border-radius: 15px;
  justify-content: space-evenly;
}
.semi{
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 50%;
    
}
</style>