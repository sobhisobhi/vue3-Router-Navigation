<template>
  <div class="container">
    <header class="jumbotron">
      <h1>Home Page</h1>
      <h3>{{ content }}</h3>
    </header>
  </div>
</template>

<script>
import userServices from "@/services/user.services";
export default {
  name: "HomePage",
  data() {
    return {
      content: "Welcome to Home Page",
    };
  },
  mounted() {
    userServices.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        console.log("🚀 ~ file: Home.vue:35 ~ mounted ~ error", error);
        this.content =
          error?.response?.data?.message ||
          error?.message ||
          error.toString("error in response content");
      }
    );
  },
};
</script>
