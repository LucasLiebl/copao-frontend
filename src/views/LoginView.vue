<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '../stores/auth'

const authStore = new useAuthStore()

const user = reactive({
  email: 'bruno@gabigol.com',
  password: 'pedroguilherme'
})
function alert() {
  prompt('SE FUDEU')
}
</script>

<template>
  <div class="container">
    <div class="authContainer">
      <div class="img-container">
        <img src="https://i.ibb.co/hssQjFr/IMG-0309.jpg" alt="" />
      </div>
      <div class="login-container">
        <div><img src="https://i.ibb.co/9VfWVgh/COPAO-1.png" alt="" /></div>
        <form class="form">
          <div class="input-group">
            <input type="email" v-model="user.email" />
            <label for="" class="placeholder">Email</label>
          </div>
          <div class="input-group">
            <input type="password" v-model="user.password" />
            <label for="" class="placeholder">Senha</label>
            <p class="forgetPass" @click="alert()">Esqueceu a senha?</p>
          </div>
          <div class="input-group">
            <div class="button" @click="authStore.getToken(user)">Login</div>
            <p class="register">Nao possui uma conta? <span> Resgistre-se </span></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <hr />
    token {{ authStore.state.token }}
    <hr />
    decoded {{ authStore.decodedToken?.name }}
    <hr />
    {{ authStore.state }}
</template>

<style scoped>

.register {
  margin-top: 10px;
  color: #757575;
  font-size: 0.9rem;
  & span {
    color: #da0000;
    cursor: pointer;
    font-weight: 500;
  }
}
.forgetPass {
  margin-top: 10px;
  color: #da0000;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
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
    border-radius: 0px 100px 100px 0px;
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
  flex-direction: row;  
  background-color: #1e1e1e;
  border-radius: 10px;
  width: 100%;
  height: 80vh;
  text-align: center;
}
</style>
