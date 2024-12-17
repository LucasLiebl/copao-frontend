<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function buttons(value) {
  if (value === 1) {
    router.push('/login');
  } else {
    router.push('/tabela');
  }
}

</script>
<template>
  <div class="tela-inicial">
    <div class="text">
      <h1>Tenha acesso as informações sobre o copão de forma simples.</h1>
      <h3>Tenha acesso a todas as informações sobre o Copão.</h3>'
      <div class="buttons">
        <button @click="buttons(1)">Login</button>
        <button @click="buttons(2)">Ver tabela</button>
        </div>
    </div>


    <div class="img-container">
      <img src="https://i.ibb.co/9VfWVgh/COPAO-1.png" alt="logo" class="copao-img" />
      <img class="fotos" src="https://i.ibb.co/V3qVcFz/IMG-0362.jpg" alt="" />
    </div>
  </div>
</template>

<style scoped>

.buttons{
    display: flex;
    gap: 2%;
}
button {
  padding: 20px;
  border-radius: 10px;
  width: 30%;
  border: none;
  background-color: #ffffff;
  color: #1e1e1e;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all .2s;
}
button:hover {
  scale: 1.02;
}
button:active {
  background-color: #1e1e1e;
  color: white;
}
.copao-img {
  position: absolute;
  width: 20%;
}
.img-container {
  display: flex;
  width: 60%;
  overflow: hidden;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  & .fotos {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;  }
}

.tela-inicial {
  padding: 10%;
  display: flex;
  width: 100vw;
  height: 80vh;
  text-align: center;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
}
.text {
  display: flex;
  width: 50%;
  text-align: start;
  flex-direction: column;
  gap: 1rem;
}

h1 {
  font-size: 5rem;
  font-weight: 700;
  color: white;
  line-height: 1.1;
}
h3 {
  font-weight: 400;
  color: #757575;
}


</style>
