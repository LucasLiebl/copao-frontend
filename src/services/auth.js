import api from '../plugins/api.js'

class AuthService {
  async getToken(user){
    try{
      const { data }  = await api.post("token/", user)
      return data.access
    }
    catch(error){
      console.log(error)
    }
  }
}

export default new AuthService();