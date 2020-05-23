<template>
  <div id="app">
    <v-app class="overflow-hidden" style="display: flex">
      <v-content id="content">
        <router-view />
        <Navigator class="pt-7" />
      </v-content>
      <v-footer dark padless>
        <v-col class="text-center" cols="12">
          Film Pudding - Created by Kitty Gu
        </v-col>
      </v-footer>
    </v-app>
  </div>
</template>

<script lang>
import Navigator from "@/components/Navigator";

export default {
  name: "App",
  components: { Navigator },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
