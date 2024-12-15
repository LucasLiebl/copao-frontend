import api from '@/plugins/api'
class JogadorService {
  async getJogadores() {
    try {
      const { data } = await api.get(`api/jogadores/`)
      return data.results
    } catch (error) {
      console.log('error in getJogadores', error)
      throw error
    }
  }

  async getJogador(id) {
    try {
      const { data } = await api.get(`api/jogadores/${id}/`)
      return data
    } catch (error) {
      console.log('error in getJogadores', error)
      throw error
    }
  }

  async getArtilheiros(){
    try {
      const results = await api.get(`api/jogadores/artilheiros`)
      console.log(results.data)
      return results.data
    }
    catch (error) {
      console.log('error in getArtilheiros', error)
      throw error
    }
  }

  async createJogador(newJogador) {
    try {
      const { data } = await api.post(`api/jogadores/`, newJogador)
      return data.results
    } catch (error) {
      console.log('error in createJogador', error)
      throw error
    }
  }

  async updateJogador(jogador) {
    try {
      const { data } = await api.patch(`api/jogadores/${jogador.id}/`, jogador)
      return data.results
    } catch (error) {
      console.log('error in updateJogador')
      throw error
    }
  }

  async deleteJogador(id) {
    try {
      const { data } = await api.delete(`api/jogadores/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteJogador', error)
      throw error
    }
  }
}

export default new JogadorService()
