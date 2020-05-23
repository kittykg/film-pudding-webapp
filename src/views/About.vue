<template>
  <div class="about">
    <v-container fluid>
      <v-col>
        <v-row
          v-for="card in aboutCards"
          :key="card.title"
          justify="center"
          class="pa-3"
        >
          <v-card class="mx-auto" width="700">
            <v-card-title class="headline ma-2">
              {{ card.title }}
            </v-card-title>
            <v-card-text class="tile text-justify font-weight-bold px-5">
              {{ card.mainInfo }}
            </v-card-text>
            <v-card-actions>
              <v-btn
                icon
                v-for="link in card.links"
                :key="link.href"
                :href="link.href"
                target="_blank"
                class="mx-3"
              >
                <v-icon>{{ link.icon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script lang="ts">
import { AboutCard } from "@/types/about.ts";

const aboutCards: Array<AboutCard> = [
  {
    title: "About Film Pudding",
    mainInfo:
      "A film rating prediction model trained on personalised ratings. " +
      "The reason for creating it is to help Kitty to decide if she would like to watch a film.",
    links: [
      {
        icon: "mdi-github",
        href: "https://github.com/kittykg/film-pudding"
      }
    ]
  },
  {
    title: "About Kitty",
    mainInfo:
      "Hi, I'm currently a 3rd year computing student at Imperial College London. " +
      "I like coding and I like films as well :P",
    links: [
      {
        icon: "mdi-github",
        href: "https://github.com/kittykg"
      },
      {
        icon: "mdi-account-box",
        href: "https://kittykexin.me/"
      }
    ]
  }
];

export default {
  name: "About",
  data() {
    return {
      aboutCards: aboutCards
    };
  }
};
</script>
