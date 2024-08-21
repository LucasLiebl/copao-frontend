import api from '../plugins/api.js'

class CampeonatoService {
  async getCampeonatos() {
    try {
      const { data } = await api.get(`/campeonatos`)
      return data.results
    } catch (error) {
      console.log('error in getCampeonatos', error)
      throw error
    }
  }

  async createCampeonato(newCampeonato) {
    try {
      const { data } = await api.post(`/campeonatos/`, newCampeonato)
      return data.results
    } catch (error) {
      console.log('error in createCampeonato', error)
      throw error
    }
  }
  async updateCampeonato(campeonato) {
    try {
      const { data } = await api.put(`/campeonatos/${campeonato.id}/`)
      return data.results
    } catch (error) {
      console.log('error in updateCampeonato')
      throw error
    }
  }

  async deleteCampeonato(id) {
    try {
      const { data } = await api.delete(`/campeonato/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteCampeonato', error)
      throw error
    }
  }
}

export default new CampeonatoService()
