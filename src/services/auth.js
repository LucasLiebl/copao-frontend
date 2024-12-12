import api from '../plugins/api.js'

class AuthService {
  async getToken(user){
    try{
      const response = await api.post("token/", user)
      console.log(response)
      return response.data
    }
    catch(error){
      console.log("AuthService error:",error)
      throw error;
    }
  }
  async createUser(user){
    try{
      const response = await api.post("api/usuarios/", user)
      console.log(response)
      return response.data
    }
    catch(error){
      console.log("AuthService error:",error)
      throw error;
    }
  }
}

export default new AuthService();