<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p v-for="pantryItem in pantryItems">
      {{pantryItem.name}}
      {{pantryItem.starting_amount}}
      {{pantryItem.unit}}
      <br>
      <img v-bind:src="pantryItem.image" :height="100">
      <hr>
    </p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to pantry items index",
      pantryItems: [],
    };
  },
  created: function () {
    axios.get("/api/pantry_items").then((response) => {
      console.log(response.data);
      this.pantryItems = response.data;
    });
  },
  methods: {},
};
</script>