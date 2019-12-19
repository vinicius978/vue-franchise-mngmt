<template>
  <v-row justify="center">
    
      <LoginForm v-show="pwd" />
   
  </v-row>
</template>
<script>
import LoginForm from "../components/loginform";
export default {
  name: "login",
  components: {
    LoginForm
  },
  computed: {
    pwd() {
      return this.$store.getters.getLogin;
    }
  }
};
</script>