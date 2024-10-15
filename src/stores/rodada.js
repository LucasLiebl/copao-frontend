import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { RodadaService } from '@/services'


export const useRodadaStore = defineStore('rodada', () => {
  const state = reactive({
    rodadas: [],
    selectedRodada: null,
    loading: false,
    error: null,
    connection: false
  })
  const isLoading = computed(() => state.loading)
  const rodadasCount = computed(() => state.rodadas.length)
  const rodadas = computed(() => state.rodadas)

  
  const getRodadas = async () => {
    state.loading = true
    try {
      state.rodadas = await RodadaService.getRodadas()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
      state.connection = true
    }
  }

 
  const createRodada = async (newRodada) => {
    state.loading = true
    try {
      state.rodadas.push(await RodadaService.createRodada(newRodada))
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }


  const updateRodada = async (rodada) => {
    state.loading = true
    try {
      const index = state.rodadas.findIndex((s) => s.id === rodada.id)
      state.rodadas[index] = await RodadaService.getRodadas()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

 
  const deleteRodada = async (idRodada) => {
    state.loading = true
    try {
      const index = state.rodadas.findIndex((s) => s.id === idRodada)
      console.log(index)
      await RodadaService.deleteRodada(idRodada)
      state.rodadas.splice(index, 1)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    isLoading,
    rodadasCount,
    getRodadas,
    rodadas,
    createRodada,
    updateRodada,
    deleteRodada
  }
})
