<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="navbar-brand">
            <img
              alt="Smile"
              class="gl-button-icon lazy"
              src="../public/smile.png"
            />
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link>
        </li>
        <li v-if="!showAdminBord" class="nav-item">
          <router-link to="/admin" class="nav-link"> Admin Board </router-link>
        </li>
        <li v-if="!currentUser" class="nav-item">
          <router-link to="/user" class="nav-link"> User </router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link"> Register </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link"> Login </router-link>
        </li>
      </div>
      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a @click.prevent="logout" class="nav-link">
            <font-awesome-icon icon="sign-out-alt" />Logout
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showAdminBord() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_ADMIN");
      }
      return false;
    },
    currentUser() {
      return this.$store.state.auth.user;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_MODERATOR");
      }
      return false;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.gl-button-icon {
  height: 1rem;
  width: 1rem;
  flex-shrink: 0;
  margin-right: 0.25rem;
  top: auto;
}
</style>
