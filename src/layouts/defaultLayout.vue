<template>
  <div>
    <v-app-bar color="blue white--text" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify at it's finest</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn variant="text" icon="mdi-filter"></v-btn>

      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" bottom temporary>
      <v-list v-for="item in items" :key="item.value">
        <v-list-item :to="{ name: item.value }" exact>
          {{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="pa-3 pa-sm-6 pa-md-12">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const drawer = ref<boolean>(false);
const items = [
  {
    title: "Homepage",
    value: "index"
  },
  {
    title: "About",
    value: "about"
  },
  {
    title: "Blog",
    value: "blog"
  },
  {
    title: "API",
    value: "api"
  }
];
</script>
