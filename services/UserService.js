import axios from "axios";
import { BASE_URL } from "./Base";

const USER_API_BASE_URL = BASE_URL + "/user";

class UserService {
   getUserBusinessAll() {
      return axios.get(USER_API_BASE_URL + "/business");
   }

   getUserNomadAll() {
      return axios.get(USER_API_BASE_URL + "/nomad");
   }

   // Business user registration
   addUserBusiness(userData) {
      return axios.post(USER_API_BASE_URL + "/business", userData);
   }

   // Nomad user registration
   addUserNomad(userData) {
      return axios.post(USER_API_BASE_URL + "/nomad", userData);
   }
}

export default new UserService();
