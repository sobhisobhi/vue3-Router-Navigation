<template>
  <div class="container">
    <header class="jumbotron">
      <h1>Dashboard Profile</h1>
      <strong>{{ currentUser.username }}</strong> Profile
    </header>
    <p>
      <strong>Token:</strong>
      {{ currentUser.token.subdtring(0, 20) }} ...
      {{ currentUser.substr(currentUser.token.length - 20) }}
    </p>
    <p><strong> Id: </strong>{{ currentUser.id }}</p>
    <p><strong> Email: </strong>{{ currentUser.email }}</p>
    <strong>Role: </strong>
    <ul>
      <li v-if="role in currentUser.roles" :key="role"></li>
      {{
        role
      }}
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    role() {
      return this.$store.state.auth.user.roles["roles"];
    },
  },
  mounted() {
    /* async mounted() {
      await this.$store.dispatch("auth/fetchUser");
    }, */
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>
