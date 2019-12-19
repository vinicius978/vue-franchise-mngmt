<template>
  <v-app inpire app right>
    <v-navigation-drawer v-if="lookMenu" v-model="drawer" app>
      <!-- -->
      <v-list shaped>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <router-link class="linkis" to="/home">
              <v-list-item-title>Home</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <router-link class="linkis" to="about">
              <v-list-item-title>Metas</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-if="lookMenu" app color dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Constance</v-toolbar-title>
      <v-spacer></v-spacer> 
      <v-toolbar-title><v-btn @click="logOut()"> <v-icon>mdi-power-standby</v-icon>  Log Out</v-btn></v-toolbar-title>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container class="ma-md-4 boder" fluid>
        <div class="d-flex mb-6">
          <!-- Onde carrega o conteúdo -->
          <router-view></router-view>
        </div>
      </v-container>
    </v-content>
    <v-footer app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: true
  }),
  computed :{
    lookMenu (){
      return  this.$store.getters.getLook;
    }
  },
 methods:{
   logOut(){
     this.$store.dispatch("logout");
     this.$store.dispatch("hideMenu")
     this.$router.push('/');
   }
 }


};
</script>
<style lang="scss" scoped>
.linkis {
  text-decoration: none;
  color: azure;
}
.boder {
  // border: solid 1px red;
}
</style>
