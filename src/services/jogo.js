import api from '../plugins/api'

/**
 * Service class for handling jogos related operations.
 */
class JogoService {
  /**
   * Retrieves all jogos.
   * @returns {Promise<Array>} A promise that resolves to an array of jogos.
   * @throws {Error} If an error occurs while retrieving the jogos.
   */
  async getJogos() {
    try {
      const { data } = await api.get(`/jogos`)
      return data.results
    } catch (error) {
      console.log('error in getJogos', error)
      throw error
    }
  }

  /**
   * Creates a new jogo.
   * @param {Object} newJogo - The new jogo object to create.
   * @returns {Promise<Object>} A promise that resolves to the created jogo object.
   * @throws {Error} If an error occurs while creating the jogo.
   */
  async createJogo(newJogo) {
    try {
      const { data } = await api.post(`/jogos/`, newJogo)
      return data.results
    } catch (error) {
      console.log('error in createJogo', error)
      throw error
    }
  }

  /**
   * Updates an existing jogo.
   * @param {Object} jogo - The jogo object to update.
   * @returns {Promise<Object>} A promise that resolves to the updated jogo object.
   * @throws {Error} If an error occurs while updating the jogo.
   */
  async updateJogo(jogo) {
    try {
      const { data } = await api.put(`/jogos/${jogo.id}/`)
      return data.results
    } catch (error) {
      console.log('error in updateJogo')
      throw error
    }
  }

  /**
   * Deletes a jogo by its ID.
   * @param {number} id - The ID of the jogo to delete.
   * @returns {Promise<Object>} A promise that resolves to the deleted jogo object.
   * @throws {Error} If an error occurs while deleting the jogo.
   */
  async deleteJogo(id) {
    try {
      const { data } = await api.delete(`/jogo/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteJogo', error)
      throw error
    }
  }
}

export default new JogoService()
