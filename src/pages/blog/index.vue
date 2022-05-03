<template>
  <main class="container">
    <h1 class="text-h3">
      Why I love Vue, Nuxt.Js and Vuetify
      <span class="text-subtitle-2">... and Naive UI</span>
    </h1>
    <v-img
      class="bg-white py-3"
      width="auto"
      height="600"
      cover
      src="https://images.pexels.com/photos/11035366/pexels-photo-11035366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ></v-img>
    <p class="my-6">By: Jason Clarke</p>
    <div class="text">
      <p>
        Simple, they're amazing! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quaerat quis dolor sint optio, mollitia ipsum iste
        unde possimus. Officia aut soluta dignissimos mollitia nemo nesciunt
        perspiciatis modi deserunt ab ipsum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, eos
        recusandae modi minus assumenda dignissimos commodi sint accusamus quam
        minima aut dolorum rem nisi ipsa repellendus fuga quidem consequatur
        eligendi dolorem magnam aliquam libero incidunt! In excepturi commodi
        error veritatis, deleniti dolor voluptate esse, vel ratione eum
        incidunt, inventore nulla porro! Vel sunt optio sapiente iure illum
        accusamus quos voluptatem autem quibusdam cum libero vitae soluta,
        delectus inventore quae atque voluptas et. Molestias, aliquam quos.
        Voluptatibus omnis voluptas quibusdam deleniti amet tempora rerum.
        Quidem commodi nihil assumenda, error temporibus dicta aperiam nostrum
        odio, blanditiis veniam molestias, quis architecto velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        perferendis excepturi laborum nesciunt esse saepe consectetur culpa nam
        ipsum exercitationem laudantium doloremque natus quibusdam enim quasi
        molestiae neque veniam fuga dicta ipsam, voluptatum beatae consequatur
        impedit. Distinctio nisi odit voluptatibus natus, accusantium quidem et.
        Labore dolore, et quisquam consectetur quam repellat accusantium
        voluptas expedita delectus quasi autem non unde accusamus omnis nesciunt
        eveniet pariatur enim asperiores molestias!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos
        tenetur nisi distinctio, beatae fugiat pariatur corrupti dolore nostrum
        reprehenderit est doloribus dolores consequatur labore, officiis neque
        animi odio sequi quis quidem consequuntur praesentium qui. Eveniet
        suscipit saepe nulla inventore facilis. Illum, possimus eligendi
        incidunt error eveniet autem dolore beatae optio quibusdam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        explicabo mollitia iure.
      </p>
    </div>

    <v-btn to="/" class="link">Homepage</v-btn>
  </main>
</template>
<script setup lang="ts"></script>
<style lang="scss">
h1 {
  padding-bottom: 5px;

  margin-bottom: 20px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.text {
  p {
    margin: 20px 0;
  }
}
</style>
