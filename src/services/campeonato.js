import api from '../plugins/api'

/**
 * Service class for handling campeonatos related operations.
 */
class CampeonatoService {
  /**
   * Retrieves all campeonatos.
   * @returns {Promise<Array>} A promise that resolves to an array of campeonatos.
   * @throws {Error} If an error occurs while retrieving the campeonatos.
   */
  async getCampeonatos() {
    try {
      const { data } = await api.get(`/campeonatos`)
      return data.results
    } catch (error) {
      console.log('error in getCampeonatos', error)
      throw error
    }
  }

  /**
   * Creates a new campeonato.
   * @param {Object} newCampeonato - The new campeonato object to create.
   * @returns {Promise<Object>} A promise that resolves to the created campeonato object.
   * @throws {Error} If an error occurs while creating the campeonato.
   */
  async createCampeonato(newCampeonato) {
    try {
      const { data } = await api.post(`/campeonatos/`, newCampeonato)
      return data.results
    } catch (error) {
      console.log('error in createCampeonato', error)
      throw error
    }
  }

  /**
   * Updates an existing campeonato.
   * @param {Object} campeonato - The campeonato object to update.
   * @returns {Promise<Object>} A promise that resolves to the updated campeonato object.
   * @throws {Error} If an error occurs while updating the campeonato.
   */
  async updateCampeonato(campeonato) {
    try {
      const { data } = await api.put(`/campeonatos/${campeonato.id}/`)
      return data.results
    } catch (error) {
      console.log('error in updateCampeonato')
      throw error
    }
  }

  /**
   * Deletes a campeonato by its ID.
   * @param {number} id - The ID of the campeonato to delete.
   * @returns {Promise<Object>} A promise that resolves to the deleted campeonato object.
   * @throws {Error} If an error occurs while deleting the campeonato.
   */
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
