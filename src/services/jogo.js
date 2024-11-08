import api from '../plugins/api'


class JogoService {

  async getJogos() {
    try {
      const { data } = await api.get(`/jogos`)
      return data.results
    } catch (error) {
      console.log('error in getJogos', error)
      throw error
    }
  }

  async getJogo(id) {
    try {
      const { data } = await api.get(`/jogos/${id}/`)
      return data
    } catch (error) {
      console.log('error in getJogos', error)
      throw error
    }
  }

  async createJogo(newJogo) {
    try {
      const { data } = await api.post(`/jogos/`, newJogo)
      return data.results
    } catch (error) {
      console.log('error in createJogo', error)
      throw error
    }
  }

 
  async updateJogo(jogo) {
    try {
      const { data } = await api.put(`/jogos/${jogo.id}/`)
      return data.results
    } catch (error) {
      console.log('error in updateJogo')
      throw error
    }
  }


  async deleteJogo(id) {
    try {
      const { data } = await api.delete(`/jogos/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteJogo', error)
      throw error
    }
  }
}

export default new JogoService()
