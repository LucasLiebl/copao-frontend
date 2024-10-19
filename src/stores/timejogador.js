import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { TimeJogadorService } from '@/services'

export const useTimeJogadorStore = defineStore('timejogador', () => {
  const state = reactive({
    timejogadores: [],
    selectedTimeJogador: null,
    loading: false,
    error: null,
    connection: false
  })
  const isLoading = computed(() => state.loading)
  const timeJogadoresCount = computed(() => state.timejogadores.length)
  const timeJogadores = computed(() => state.timejogadores)

  const getTimeJogadores = async () => {
    state.loading = true
    console.log("Pinia: getTimeJogadores - open loader")
    try {
      state.timejogadores = await TimeJogadorService.getTimeJogadores()
      console.log("Pinia: getTimeJogadores - send")
    } catch (error) {
      state.error = error
      console.log("Pinia: getTimeJogadores - return error", error)
    } finally {
      state.loading = false
      state.connection = true
    }
  }

  const createTimeJogador = async (newTimeJogador) => {
    state.loading = true
    try {
      state.timejogadores.push(await TimeJogadorService.createTimeJogador(newTimeJogador))
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const updateTimeJogador = async (timeJogador) => {
    state.loading = true
    try {
      const index = state.timejogadores.findIndex((s) => s.id === timeJogador.id)
      state.timejogadores[index] = await TimeJogadorService.updateTimeJogador(timeJogador)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const deleteTimeJogador = async (id) => {
    state.loading = true
    try {
      const index = state.timejogadores.findIndex((s) => s.id === id)
      state.timejogadores.splice(index, 1)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    isLoading,
    timeJogadoresCount,
    timeJogadores,
    getTimeJogadores,
    createTimeJogador,
    updateTimeJogador,
    deleteTimeJogador
  }
})