<template>
  <div class="text-center">
    <v-btn
      v-if="router.currentRoute.name === 'About'"
      text
      @click="router.push('/')"
    >
      Home
    </v-btn>
    <v-btn v-else text @click="router.push('/about')">
      About Film Pudding
    </v-btn>
  </div>
</template>

<script lang="ts">
import router from "@/router";

export default {
  name: "Navigator",
  data: () => ({
    router: router
  })
};
</script>
