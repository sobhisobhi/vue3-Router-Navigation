import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "signin", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", response.data);
          localStorage.setItem("token", response.data.token);
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    return axios.post(API_URL + "signout");
  }
  register(user) {
    return axios.post(API_URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
