import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/auth/";

class UserService {
  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(API_URL + "moderator", { headers: authHeader() });
  }
  getPublicContent() {
    return axios.get(API_URL + "all");
  }
}

export default new UserService();
