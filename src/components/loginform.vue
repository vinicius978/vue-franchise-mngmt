<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm6 md4>
      <v-menu transition="scale-transition" origin="center center">
        <template v-slot:activator="{ on }">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field label="Login" name="login" prepend-icon="mdi-account" type="text"></v-text-field>
                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="singnIn()">Login</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-menu>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "loginform",

  methods: {
    singnIn() {
      this.$store.dispatch("logged");
      this.$store.dispatch("showMenu")
    }
  }
};
</script>