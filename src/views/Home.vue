<template>
  <div class="home">
    <div style="text-align: center">
      <img src="@/assets/logo.png" style="height: 300px; width: 300px" />
    </div>
    <FilmPudding />
  </div>
</template>

<script lang="ts">
import FilmPudding from "@/components/FilmPudding.vue";

export default {
  name: "Home",
  components: {
    FilmPudding
  }
};
</script>
