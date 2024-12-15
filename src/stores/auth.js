import { reactive, computed } from 'vue';
import { jwtDecode } from "jwt-decode";
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import AuthService from '../services/auth.js';

const authService = AuthService;

export const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    token: useStorage('token', ''),
    loading: false,
    isLogged: useStorage('isLogged', false),
    email: computed(() => state.token ? jwtDecode(state.token).email : ''),
    id: computed(() => state.token ? jwtDecode(state.token).id : ''),
    foto: computed(() => state.token ? jwtDecode(state.token).foto : ''),
    nome: computed(() => state.token ? jwtDecode(state.token).nome : ''),
    grupos: computed(() => state.token ? jwtDecode(state.token).groups : []),
  });
    const isLoading = computed(() => state.loading);
    const isLogged = computed(() => state.isLogged);
    const user = computed(() => {
      return {
        email: state.email,
        id: state.id,
        foto: state.foto,
        nome: state.nome,
        grupos: state.grupos,
      };
    })

    const setToken = (newToken) => {
     state.token = newToken
    };

    const loginUser = async (user) => {
      state.token = '';
      state.isLogged = false;
      state.loading = true;
      try {
        const response = await authService.getToken(user);
        console.log('response:', response);
        setToken(response.access);
        state.isLogged = true;
        return response
      } catch (error) {
        console.error('Erro no login:', error);
        state.isLogged = false;
        state.token = '';
      } finally {
        state.loading = false
      }

    // const unsetToken = async () => {
    //   state.token = null;
    //   state.isLogged = false;
    // }
    
    }

    const logoutUser = async () => {
      state.loading = true;
      try {
        state.token = null;
        state.isLogged = false;
        const response = 'Logout efetuado com sucesso';
        return response;
      }catch(error){
        console.error('Erro no logout:', error);
      }finally{
        state.loading = false;
      }
      
    }

    const createUser = async(user) =>{
      state.token = '';
      state.isLogged = false;
      state.loading = true;
      try {
        const response = await authService.createUser(user);
        console.log('response:', response);
        state.error = null;
        return response
      } catch (error) {
        console.error('Erro no cadastro:', error);
        state.error = error;
      } finally {
        state.loading = false
      }

    }

  return { state, setToken, isLoading, isLogged, user, loginUser, createUser, logoutUser };
});