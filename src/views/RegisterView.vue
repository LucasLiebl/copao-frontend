<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const authStore = useAuthStore()

const user = reactive({
  name: 'Bruno',  
  email: 'bruno@gabigol.com',
  password: 'pedroguilherme'
})
// function alert() {
//   prompt('SE FUDEU')
// }

async function handleLogin() {
  console.log("Função handleLogin foi chamada");

  try {
    const response = await authStore.createUser(user);

    if (response) {
      alert('Registro efetuado com sucesso. Redirenionando para a página de login.');
      router.push('/login');
    }
  } catch (error) {
    console.error('Erro no registro:', error);
    alert('Erro no registro. Verifique suas credenciais.');
  }
}
</script>

<template>
    <div  :class="authStore.isLoading ? 'loading' : 'notLoading'">
    <svg viewBox="25 25 50 50" >
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  </div>

  <div  :class="authStore.isLoading ? 'notLoading' : 'container'">
    <div class="authContainer">
      <div class="img-container">
        <img src="https://i.ibb.co/V3qVcFz/IMG-0362.jpg" alt="" />
      </div>
      <div class="login-container">
        <div><img src="https://i.ibb.co/9VfWVgh/COPAO-1.png" alt="" /></div>
        <form class="form">
            <div class="input-group">
            <input type="email" v-model="user.name" />
            <label for="" class="placeholder">Nome</label>
          </div>
          <div class="input-group">
            <input type="email" v-model="user.email" />
            <label for="" class="placeholder">Email</label>
          </div>
          <div class="input-group">
            <input type="password" v-model="user.password" />
            <label for="" class="placeholder">Senha</label>
          </div>
          <div class="input-group">
            <div class="button" @click="handleLogin()">Register</div>
            
            <p class="register">Ja possui uma conta? <RouterLink class="register-link" to="/login">Log-in</RouterLink> </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- <div class="debug">
  <div v-if="authStore.state.error" class="error">
      {{ authStore.state.error.message }}
    </div>
  error {{ authStore.state.error }}
  <hr />
    token {{ authStore.state.token }}
    <hr />
    {{ authStore.state }}
    <hr>
    {{ authStore.user }}
    </div> -->
</template>

<style scoped>
svg {
  width: 3.25em;
  transform-origin: center;
  animation: rotate4 2s linear infinite;
}

circle {
  fill: none;
  stroke: hsl(0, 0%, 100%);
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash4 {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
}
.notLoading{
  display: none;
  transition: 5ms;
}
.loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgb(32, 32, 32);
  transition: 5ms;
  display: flex;
  align-content: center;
  justify-content: center
  
}

.debug{
  color: white;
}

.register {
  margin-top: 10px;
  color: #757575;
  font-size: 0.9rem;
}
.register-link{
  color: #da0000;
    cursor: pointer;
    font-weight: 500;

}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.button {
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  border: none;
  background-color: #ffffff;
  color: #1e1e1e;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
}
input {
  outline: none;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #757575;
  background-color: #1e1e1e;
  color: white;
  font-weight: 100;
}
.input-group {
  width: 60%;
  position: relative;
}
.placeholder {
  padding: 0px 5px 0px 5px;
  position: absolute;
  left: 10%;
  bottom: 85%;
  color: #757575;
  font-size: 1.2rem;
  pointer-events: none;
  background-color: #1e1e1e;
  font-size: 1rem;
  font-weight: 500;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 5%;
}

h1 {
  font-size: 2rem;
  color: #343a40;
  margin-bottom: 30px;
  text-align: center;
}
.img-container {
  width: 60%;
  overflow: hidden;
  border-radius: 10px;
    
  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100px 0px 0px 100px;
  }
}

.login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  width: 80%;

}
.authContainer {
  display: flex;
  flex-direction: row-reverse;  
  background-color: #1e1e1e;
  border-radius: 10px;
  width: 100%;
  height: 80vh;
  text-align: center;
}
</style>
