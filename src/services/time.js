import api from '../plugins/api'

/**
 * Service class for handling times related operations.
 */
class TimeService {
  /**
   * Retrieves all times.
   * @returns {Promise<Array>} A promise that resolves to an array of times.
   * @throws {Error} If an error occurs while retrieving the times.
   */
  async getTimes() {
    try {
      const { data } = await api.get(`/times`)
      return data.results
    } catch (error) {
      console.log('error in getTimes', error)
      throw error
    }
  }

  /**
   * Creates a new time.
   * @param {Object} newTime - The new time object to create.
   * @returns {Promise<Object>} A promise that resolves to the created time object.
   * @throws {Error} If an error occurs while creating the time.
   */
  async createTime(newTime) {
    try {
      const { data } = await api.post(`/times/`, newTime)
      return data.results
    } catch (error) {
      console.log('error in createTime', error)
      throw error
    }
  }

  /**
   * Updates an existing time.
   * @param {Object} time - The time object to update.
   * @returns {Promise<Object>} A promise that resolves to the updated time object.
   * @throws {Error} If an error occurs while updating the time.
   */
  async updateTime(time) {
    try {
      const { data } = await api.put(`/times/${time.id}/`)
      return data.results
    } catch (error) {
      console.log('error in updateTime')
      throw error
    }
  }

  /**
   * Deletes a time by its ID.
   * @param {number} id - The ID of the time to delete.
   * @returns {Promise<Object>} A promise that resolves to the deleted time object.
   * @throws {Error} If an error occurs while deleting the time.
   */
  async deleteTime(id) {
    try {
      const { data } = await api.delete(`/time/${id}/`)
      return data.results
    } catch (error) {
      console.log('error in deleteTime', error)
      throw error
    }
  }
}

export default new TimeService()
