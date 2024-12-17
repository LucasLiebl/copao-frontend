import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { JogadorService } from '@/services'

export const useJogadorStore = defineStore('jogador', () => {
  const state = reactive({
    jogadores: [],
    jogador: [],
    selectedJogador: null,
    loading: false,
    error: null,
    connection: false,
    artilheiros: [],
  })
  const isLoading = computed(() => state.loading)
  const jogadoresCount = computed(() => state.jogadores.length)
  const jogadores = computed(() => state.jogadores)
  const artilheiros = computed(() => state.artilheiros)
  const jogador = computed(() => state.jogador)

  const getJogadores = async () => {
    state.loading = true
    try {
      state.jogadores = await JogadorService.getJogadores()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
      state.connection = true
    }
  }

  const getJogador = async (id) => {
    state.loading = true
    try {
      console.log(id)
      const data = await JogadorService.getJogador(id)
      state.jogador = data
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }
  

  const getArtilheiros = async () => {
    state.loading = true
    try{
      state.artilheiros = await JogadorService.getArtilheiros()
    }catch (error){
      state.error = error
    }finally{
      state.loading = false
      state.connection = true
    }

  }

  const createJogador = async (newJogador) => {
    state.loading = true
    try {
      state.jogadores.push(await JogadorService.createJogador(newJogador))
      await getJogadores()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const updateJogador = async (jogador) => {
    state.loading = true
    try {
      await JogadorService.updateJogador(jogador)
      await getJogadores()
    } catch (error) {
      state.error = error
    } finally {
      getJogadores()
      state.loading = false
    }

    console.log(state.jogadores)
  }

  const deleteJogador = async (id) => {
    state.loading = true
    try {
      const index = state.jogadores.findIndex((s) => s.id === id)
      console.log(index)
      await JogadorService.deleteJogador(id)
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
    jogadores,
    artilheiros,
    jogador,
    getJogadores,
    createJogador,
    updateJogador,
    deleteJogador,
    getArtilheiros,
    getJogador,
  }
})
