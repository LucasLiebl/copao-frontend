<script setup>
import cardComponent from '@/components/cardComponent.vue';
import vermelho1 from '../assets/vermelho1.png'

const datas =[
        { name: 'Monta', image: vermelho1 },
        { name: 'Vermelho', image: vermelho1 },
        { name: 'Vermelho', image: vermelho1 },
        { name: 'Vermelho', image: vermelho1 },
        { name: 'Vermelho', image: vermelho1 }
      ]
</script>

<template> 
<cardComponent :datas="datas"/>
</template>