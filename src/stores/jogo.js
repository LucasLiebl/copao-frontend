import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { JogoService } from '@/services'


export const useJogoStore = defineStore('jogo', () => {
  const state = reactive({
    jogos: [],
    selectedJogo: null,
    loading: false,
    error: null,
    connection: false,
    jogo: [],
  })
  const isLoading = computed(() => state.loading)
  const jogosCount = computed(() => state.jogos.length)
  const jogos = computed(() => state.jogos)
  const jogo = computed(() => state.jogo)


  
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

  const getJogo = async (id) => {
    state.loading = true
    try {
      console.log(id)
      const data = await JogoService.getJogo(id)
      state.jogo = data
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
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


  const deleteJogo = async (idJogo) => {
    state.loading = true
    try {
      const index = state.jogos.findIndex((s) => s.id === idJogo)
      console.log(index)
      await JogoService.deleteJogo(idJogo)
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
    jogos,
    jogo,
    getJogos,
    getJogo,
    createJogo,
    updateJogo,
    deleteJogo
  }
})
