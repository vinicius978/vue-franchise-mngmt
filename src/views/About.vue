<template>
  <div>
    <v-stepper light lt-labels class="stepper">
      <v-stepper-header>
        <v-stepper-step step="1">Básico</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2">Ouro</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Diamante</v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        e1: 0,
      }
    },
  }
</script>

<style scoped>
  .stepper {
    width: 80%;
    position: absolute;
  }
</style>