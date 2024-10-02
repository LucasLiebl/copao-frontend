import api from '../plugins/api.js'

class TimeJogadorService {
  async getTimeJogadores() {
    try {
      const { data } = await api.get(`/timejogadores`)
      return data.results
    } catch (error) {
      console.log('error in getTimeJogadores', error)
      throw error
    }
  }

  async createTimeJogador(newTimeJogador) {
    try {
      const { data } = await api.post(`/timejogadores/`, newTimeJogador)
      return data.results
    } catch (error) {
      console.log('error in createTimeJogador', error)
      throw error
    }
  }

  async updateTimeJogador(timeJogador) {
    try {
      const { data } = await api.put(`/timejogadores/${timeJogador.id}/`)
      return data.results
    } catch (error) {
      console.log('error in updateTimeJogador')
      throw error
    }
  }

  async deleteTimeJogador(id) {
    try {
      const { data } = await api.delete(`/timejogadores/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteTimeJogador', error)
      throw error
    }
  }
}

export default new TimeJogadorService()

