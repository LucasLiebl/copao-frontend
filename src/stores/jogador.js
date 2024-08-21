import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { JogadorService } from '@/services'


export const useJogadorStore = defineStore('jogador', () => {
  const state = reactive({
    jogadores: [],
    selectedJogador: null,
    loading: false,
    error: null,
    connection: false
  })
  const isLoading = computed(() => state.loading)
  const jogadoresCount = computed(() => state.jogadores.length)

  
const getJogadores = async () => {
  state.loading = true;
  try {
    state.jogadores = await JogadorService.getJogadores();
  } catch (error) {
    state.error = error;
  } finally {
    state.loading = false;
    state.connection = true;
  }
};

  const createJogador = async (newJogador) => {
    state.loading = true
    try {
      state.jogadores.push(await JogadorService.createJogador(newJogador))
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }


  const updateJogador = async (jogador) => {
    state.loading = true
    try {
      const index = state.jogadores.findIndex((s) => s.id === jogador.id)
      state.jogadores[index] = await JogadorService.getJogadores()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }


  const deleteJogador = async (id) => {
    state.loading = true
    try {
      const index = state.jogadores.findIndex((s) => s.id === id)
      state.jogadores.splice(index, 1)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    isLoading,
    jogadoresCount,
    getJogadores,
    createJogador,
    updateJogador,
    deleteJogador
  }
})
