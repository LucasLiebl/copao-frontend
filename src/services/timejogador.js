import api from '../plugins/api.js'

class TimeJogadorService {
  async getTimeJogadores() {
    try {
      const { data } = await api.get(`/time_jogadores/`)
      return data.results
    } catch (error) {
      console.log('error in getTime_Jogadores', error)
      throw error
    }
  }

  async createTimeJogador(newTimeJogador) {
    try {
      const { data } = await api.post(`/time_jogadores/`, newTimeJogador)
      return data.results
    } catch (error) {
      console.log('error in createTimeJogador', error)
      throw error
    }
  }

  async updateTimeJogador(timeJogador) {
    try {
      const { data } = await api.put(`/time_jogadores/${timeJogador.id}/`)
      return data.results
    } catch (error) {
      console.log('error in updateTimeJogador')
      throw error
    }
  }

  async deleteTimeJogador(id) {
    try {
      const { data } = await api.delete(`/time_jogadores/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteTimeJogador', error)
      throw error
    }
  }
}

export default new TimeJogadorService()

