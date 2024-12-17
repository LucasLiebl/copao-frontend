import api from '../plugins/api'


class JogoService {

  async getJogos() {
    try {
      const { data } = await api.get(`api/jogos`)
      return data.results
    } catch (error) {
      console.log('error in getJogos', error)
      throw error
    }
  }

  async getJogo(id) {
    try {
      const { data } = await api.get(`api/jogos/${id}/`)
      return data
    } catch (error) {
      console.log('error in getJogos', error)
      throw error
    }
  }

  async getJogosbyTipo(tipo) {
    try {
      const { data } = await api.get(`api/jogos/`)
      return data.results.filter(j => j.tipo_jogo === tipo)

    } catch (error) {
      console.log('error in getJogos', error)
      throw error
    }
  }

  async createJogo(newJogo) {
    try {
      const { data } = await api.post(`api/jogos/`, newJogo)
      return data.results
    } catch (error) {
      console.log('error in createJogo', error)
      throw error
    }
  }

  async gerarSemis(){
    try {
      const data  = await api.post(`api/jogos/gerarsemis`)
      return data
    } catch (error) {
      console.log('error in gerarSemis', error)
      throw error
    }
  }

  async gerarFinal(){
    try{
      const data = await api.post('api/jogos/gerarfinais')
      return data
    }catch(error){
      console.log('error in gerarFinal')
      throw error
    }
  }

 
  async updateJogo(jogo) {
    try {
      const { data } = await api.put(`api/jogos/${jogo.id}/`)
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
