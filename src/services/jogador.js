import api from '@/plugins/api'
class JogadorService {
  async getJogadores() {
    try {
      const { data } = await api.get(`/jogadores/`)
      return data.results
    } catch (error) {
      console.log('error in getJogadores', error)
      throw error
    }
  }

  async createJogador(newJogador) {
    try {
      const { data } = await api.post(`/jogadores/`, newJogador)
      return data.results
    } catch (error) {
      console.log('error in createJogador', error)
      throw error
    }
  }

  async updateJogador(jogador) {
    try {
      const { data } = await api.patch(`/jogadores/${jogador.id}/`, jogador)
      return data.results
    } catch (error) {
      console.log('error in updateJogador')
      throw error
    }
  }

  async deleteJogador(id) {
    try {
      const { data } = await api.delete(`/jogadores/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteJogador', error)
      throw error
    }
  }
}

export default new JogadorService()
