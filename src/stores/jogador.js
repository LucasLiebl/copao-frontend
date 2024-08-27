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
  const jogadores = computed(() => state.jogadores)

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
      await JogadorService.updateJogador(jogador)
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
    getJogadores,
    createJogador,
    updateJogador,
    deleteJogador
  }
})
