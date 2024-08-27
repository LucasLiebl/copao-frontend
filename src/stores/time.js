import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { TimeService } from '@/services'

export const useTimeStore = defineStore('time', () => {
  const state = reactive({
    times: [],
    selectedTime: null,
    loading: false,
    error: null,
    connection: false
  })
  const isLoading = computed(() => state.loading)
  const timesCount = computed(() => state.times.length)
  const times = computed(() => state.times) 

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

  return {
    state,
    isLoading,
    timesCount,
    times,
    getTimes,
    createTime,
    updateTime,
    deleteTime
  }
})
