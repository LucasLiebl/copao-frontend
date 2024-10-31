import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { TimeService } from '@/services'

export const useTimeStore = defineStore('time', () => {
  const state = reactive({
    times: [],
    selectedTime: null,
    loading: false,
    error: null,
    connection: false,
    time: {
      jogadores: []
    }
  })
  const isLoading = computed(() => state.loading)
  const timesCount = computed(() => state.times.length)
  const times = computed(() => state.times) 
  const time = computed(() => state.time)

  const getTimes = async () => {
    state.loading = true
    try {
      state.times = await TimeService.getTimes()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
      state.connection = true
    }
  }

 
  const createTime = async (newTime) => {
    state.loading = true
    try {
      state.times.push(await TimeService.createTime(newTime))
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }


  const updateTime = async (time) => {
    state.loading = true
    try {
      await TimeService.updateTime(time)
    } catch (error) {
      state.error = error
    } finally {
      getTimes()
      state.loading = false
    }
  }

 
  const deleteTime = async (id) => {
    state.loading = true
    try {
      const index = state.times.findIndex((s) => s.id === id)
      console.log(index)
      await TimeService.deleteTime(id)
      state.times.splice(index, 1)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const getTime = async (id) => {
    state.loading = true
    try {
      console.log(id)
      const data = await TimeService.getTime(id)
      state.time = data
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    isLoading,
    timesCount,
    times,
    time,
    getTimes,
    createTime,
    updateTime,
    deleteTime,
    getTime
  }
})
