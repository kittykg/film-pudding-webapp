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
            v-on:keyup.enter="predictionWrapper"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-btn block rounded large @click="predictionWrapper()">
            <v-icon class="pr-5">mdi-movie-roll</v-icon>Let's see
          </v-btn>
        </v-row>
        <v-dialog v-model="dialog" max-width="300">
          <v-card>
            <v-card-title class="headline">Here's the prediction</v-card-title>
            <v-card-text>
              {{ response }}
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getPrediction } from "@/api.ts";

export default Vue.extend({
  name: "FilmPudding",
  data: () => {
    return {
      dialog: false,
      filmName: "",
      filmYear: "",
      response: ""
    };
  },
  methods: {
    predictionWrapper(): void {
      if (!this.filmName || !this.filmYear) return;
      if (!/^[0-9]+$/.test(this.filmYear)) return;

      getPrediction(this.filmName, this.filmYear)
        .then(p => {
          this.response = p.prediction;
        })
        .catch(() => {
          this.response = "Oops, something is wrong!";
        });

      this.dialog = true;
    }
  }
});
</script>
