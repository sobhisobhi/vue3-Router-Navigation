<template>
  <div class="container">
    <header class="jumbotron">
      <h1>Dashboard User</h1>
      <h3>{{ content }}</h3>
    </header>
  </div>
</template>

<script>
import UserService from "@/services/user.services";
export default {
  name: "UserPage",
  data() {
    return {
      content: "Welcome to Dashboard User",
    };
  },
  mounted() {
    UserService.getUserBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        console.log(error);
        this.content =
          error?.response?.data?.message ||
          error?.message ||
          error.toString("Error in response content");
      }
    );
  },
};
</script>
