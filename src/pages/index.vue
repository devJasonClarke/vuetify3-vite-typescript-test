<template>
  <div>
    <p class="text-h2 my-6">
     Welcome to Vuetify 3
    </p>
    <v-btn @click="changeTheme()">Change theme</v-btn>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "@/stores/index";
const store = useStore();

const { changeTheme } = store;
</script>

<style scoped></style>
