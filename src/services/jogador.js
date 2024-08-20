import api from '../plugins/api'

/**
 * Service class for handling jogadores related operations.
 */
class JogadorService {
  /**
   * Retrieves all jogadores.
   * @returns {Promise<Array>} A promise that resolves to an array of jogadores.
   * @throws {Error} If an error occurs while retrieving the jogadores.
   */
  async getJogadores() {
    try {
      const { data } = await api.get(`/jogadores`)
      return data.results
    } catch (error) {
      console.log('error in getJogadores', error)
      throw error
    }
  }

  /**
   * Creates a new jogador.
   * @param {Object} newJogador - The new jogador object to create.
   * @returns {Promise<Object>} A promise that resolves to the created jogador object.
   * @throws {Error} If an error occurs while creating the jogador.
   */
  async createJogador(newJogador) {
    try {
      const { data } = await api.post(`/jogadores/`, newJogador)
      return data.results
    } catch (error) {
      console.log('error in createJogador', error)
      throw error
    }
  }

  /**
   * Updates an existing jogador.
   * @param {Object} jogador - The jogador object to update.
   * @returns {Promise<Object>} A promise that resolves to the updated jogador object.
   * @throws {Error} If an error occurs while updating the jogador.
   */
  async updateJogador(jogador) {
    try {
      const { data } = await api.put(`/jogadores/${jogador.id}/`)
      return data.results
    } catch (error) {
      console.log('error in updateJogador')
      throw error
    }
  }

  /**
   * Deletes a jogador by its ID.
   * @param {number} id - The ID of the jogador to delete.
   * @returns {Promise<Object>} A promise that resolves to the deleted jogador object.
   * @throws {Error} If an error occurs while deleting the jogador.
   */
  async deleteJogador(id) {
    try {
      const { data } = await api.delete(`/jogador/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteJogador', error)
      throw error
    }
  }
}

export default new JogadorService()
