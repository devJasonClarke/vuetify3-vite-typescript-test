<template>
  <v-app :theme="theme">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import { toRefs } from "vue";
import { useStore } from "@/stores/index";
const store = useStore();
const { theme } = toRefs(store);
</script>
