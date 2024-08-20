import api from '../plugins/api'

/**
 * Service class for handling rodadas related operations.
 */
class RodadaService {
  /**
   * Retrieves all rodadas.
   * @returns {Promise<Array>} A promise that resolves to an array of rodadas.
   * @throws {Error} If an error occurs while retrieving the rodadas.
   */
  async getRodadas() {
    try {
      const { data } = await api.get(`/rodadas`)
      return data.results
    } catch (error) {
      console.log('error in getRodadas', error)
      throw error
    }
  }

  /**
   * Creates a new rodada.
   * @param {Object} newRodada - The new rodada object to create.
   * @returns {Promise<Object>} A promise that resolves to the created rodada object.
   * @throws {Error} If an error occurs while creating the rodada.
   */
  async createRodada(newRodada) {
    try {
      const { data } = await api.post(`/rodadas/`, newRodada)
      return data.results
    } catch (error) {
      console.log('error in createRodada', error)
      throw error
    }
  }

  /**
   * Updates an existing rodada.
   * @param {Object} rodada - The rodada object to update.
   * @returns {Promise<Object>} A promise that resolves to the updated rodada object.
   * @throws {Error} If an error occurs while updating the rodada.
   */
  async updateRodada(rodada) {
    try {
      const { data } = await api.put(`/rodadas/${rodada.id}/`)
      return data.results
    } catch (error) {
      console.log('error in updateRodada')
      throw error
    }
  }

  /**
   * Deletes a rodada by its ID.
   * @param {number} id - The ID of the rodada to delete.
   * @returns {Promise<Object>} A promise that resolves to the deleted rodada object.
   * @throws {Error} If an error occurs while deleting the rodada.
   */
  async deleteRodada(id) {
    try {
      const { data } = await api.delete(`/rodada/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteRodada', error)
      throw error
    }
  }
}

export default new JogoService()
