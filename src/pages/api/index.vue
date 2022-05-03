<template>
  <div>
    <div class="mb-6">
      <v-alert v-if="status === 'success'" type="success">Success</v-alert>
      <v-alert v-else-if="status === 'failed'" type="error"
        >Failed, try again</v-alert
      >
    </div>

    <v-btn class="text-none mb-6" stacked>
      <v-badge :content="amount" color="error">
        <v-icon>mdi-gmail</v-icon>
      </v-badge>
    </v-btn>
    <v-list
      v-for="response in responses"
      :key="response.name"
      three-line
      :items="responses"
    >
      <span class="text-primary">From: {{ response.email }}</span> &mdash;
      {{ response.name }}
    </v-list>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

const responses = ref([
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "body"
  }
]);
const amount = ref(0);
const status = ref("");

function getData() {
  axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => {
      responses.value = res.data;
      amount.value = res.data.length;
      status.value = "success";
    })
    .catch((error) => {
      console.error(error);
      status.value = "failed";
    });
}
getData();
</script>

<style scoped></style>
