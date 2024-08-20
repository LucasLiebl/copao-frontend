import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { JogoService } from '@/services'


export const useJogoStore = defineStore('jogo', () => {
  const state = reactive({
    jogos: [],
    selectedJogo: null,
    loading: false,
    error: null,
    connection: false
  })
  const isLoading = computed(() => state.loading)
  const jogosCount = computed(() => state.jogos.length)

  
  const getJogos = async () => {
    state.loading = true
    try {
      state.jogos = await JogoService.getJogos()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
      state.connection = true
    }
  }

  
  const createJogo = async (newJogo) => {
    state.loading = true
    try {
      state.jogos.push(await JogoService.createJogo(newJogo))
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

 
  const updateJogo = async (jogo) => {
    state.loading = true
    try {
      const index = state.jogos.findIndex((s) => s.id === jogo.id)
      state.jogos[index] = await JogoService.getJogos()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }


  const deleteJogo = async (id) => {
    state.loading = true
    try {
      const index = state.jogos.findIndex((s) => s.id === id)
      state.jogos.splice(index, 1)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    isLoading,
    jogosCount,
    getJogos,
    createJogo,
    updateJogo,
    deleteJogo
  }
})
