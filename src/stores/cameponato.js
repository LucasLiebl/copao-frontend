import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { CampeonatoService } from '@/services'


export const useCampeonatoStore = defineStore('campeonato', () => {
  const state = reactive({
    campeonatos: [],
    selectedCampeonato: null,
    loading: false,
    error: null,
    connection: false
  })
  const isLoading = computed(() => state.loading)
  const campeonatosCount = computed(() => state.campeonatos.length)

 
  const getCampeonatos = async () => {
    state.loading = true
    console.log("Pinia: getSlideMicroscopyPost - open loader")
    try {
      state.campeonatos = await CampeonatoService.getCampeonatos()
      console.log("Pinia: getSlideMicroscopyPost - send")
    } catch (error) {
      state.error = error
      console.log( "Pinia: getSlideMicroscopyPost - return error", error)
    } finally {
      state.loading = false
      state.connection = true
    }
  }

 
  const createCampeonato = async (newCampeonato) => {
    state.loading = true
    try {
      state.campeonatos.push(await CampeonatoService.createCampeonato(newCampeonato))
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }


  const updateCampeonato = async (campeonato) => {
    state.loading = true
    try {
      const index = state.campeonatos.findIndex((s) => s.id === campeonato.id)
      state.campeonatos[index] = await CampeonatoService.getCampeonatos()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

 
  const deleteCampeonato = async (id) => {
    state.loading = true
    try {
      const index = state.campeonatos.findIndex((s) => s.id === id)
      state.campeonatos.splice(index, 1)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    isLoading,
    campeonatosCount,
    getCampeonatos,
    createCampeonato,
    updateCampeonato,
    deleteCampeonato
  }
})
