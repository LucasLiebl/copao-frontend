
import axios from 'axios'
class JogadorService {
  async getJogadores() {
    try {
      const { data } = await axios.get(`http://localhost:19003/api/jogadores/`)
      return data.results
    } catch (error) {
      console.log('error in getJogadores', error)
      throw error
    }
  }

  async createJogador(newJogador) {
    try {
      const { data } = await axios.post(`/jogadores/`, newJogador)
      return data.results
    } catch (error) {
      console.log('error in createJogador', error)
      throw error
    }
  }


  async updateJogador(jogador) {
    try {
      const { data } = await axios.put(`/jogadores/${jogador.id}/`)
      return data.results
    } catch (error) {
      console.log('error in updateJogador')
      throw error
    }
  }

 
  async deleteJogador(id) {
    try {
      const { data } = await axios.delete(`/jogador/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteJogador', error)
      throw error
    }
  }
}

export default new JogadorService()
