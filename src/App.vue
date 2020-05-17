<template>
  <div id="app">
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
