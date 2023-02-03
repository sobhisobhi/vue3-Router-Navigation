import AuthServices from "@/services/auth.services";

const user = JSON.parse(localStorage.getItem("user"));
const initialstate = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialstate,
  actions: {
    login({ commit }, user) {
      return AuthServices.login(user).then(
        (response) => {
          commit("loginSuccess", response.data);
          return Promise.resolve(response.data);
          // return response.data;
        },
        (error) => {
          commit("loginFailure", error);
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthServices.logout();
      commit("logout");
    },
    register({ commit }, user) {
      return AuthServices.register(user).then(
        (response) => {
          commit("registerSuccess", response.data);
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("registerFailure", error);
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
  },
};

export default auth;
