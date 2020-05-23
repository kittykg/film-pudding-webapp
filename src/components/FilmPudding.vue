<template>
  <div>
    <v-container>
      <v-col>
        <v-row align="center" justify="center" class="pb-7 headline">
          <div>What will Kitty's rating be for this film?</div>
        </v-row>
        <v-row>
          <v-text-field
            label="Film Name"
            v-model="filmName"
            outlined
            clearable
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            label="Film Year"
            v-model="filmYear"
            outlined
            clearable
          ></v-text-field>
        </v-row>
        <v-row>
          <v-btn block rounded large>
            <v-icon class="pr-5">mdi-movie-roll</v-icon>Let's see
          </v-btn>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script lang="ts">
export default {
  name: "FilmPudding",
  data: () => {
    return {
      filmName: "",
      filmYear: ""
    };
  }
};
</script>
