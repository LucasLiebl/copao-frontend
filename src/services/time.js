import api from '../plugins/api'

class TimeService {
  async getTimes() {
    try {
      const { data } = await api.get(`api/times/`)
      return data.results
    } catch (error) {
      console.log('error in getTimes', error)
      throw error
    }
  }

  async createTime(newTime) {
    try {
      const { data } = await api.post(`api/times/`, newTime)
      return data.results
    } catch (error) {
      console.log('error in createTime', error)
      throw error
    }
  }

  async updateTime(time) {
    try {
      const { data } = await api.patch(`api/times/${time.id}/`, time)
      return data.results
    } catch (error) {
      console.log('error in updateTime')
      throw error
    }
  }

  async deleteTime(id) {
    try {
      const { data } = await api.delete(`api/times/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteTime', error)
      throw error
    }
  }

  async getTime(id) {
    try {
      const { data } = await api.get(`api/times/${id}/`)
      return data
    } catch (error) {
      console.log('error in getTimes', error)
      throw error
    }
  }
}

export default new TimeService()
