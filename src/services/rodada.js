import api from '../plugins/api'


class RodadaService {

  async getRodadas() {
    try {
      const { data } = await api.get(`api/rodadas`)
      return data.results
    } catch (error) {
      console.log('error in getRodadas', error)
      throw error
    }
  }

  async createRodada(newRodada) {
    try {
      const { data } = await api.post(`api/rodadas/`, newRodada)
      return data.results
    } catch (error) {
      console.log('error in createRodada', error)
      throw error
    }
  }


  async updateRodada(rodada) {
    try {
      const { data } = await api.put(`api/rodadas/${rodada.id}/`)
      return data.results
    } catch (error) {
      console.log('error in updateRodada')
      throw error
    }
  }

  async deleteRodada(id) {
    try {
      const { data } = await api.delete(`api/rodadas/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteRodada', error)
      throw error
    }
  }
}

export default new RodadaService()
