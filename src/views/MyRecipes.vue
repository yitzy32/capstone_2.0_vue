<template>
  <div class="my-recipes">
    <h1>{{ message }}</h1>
    <div v-for="recipe in recipes">
      <h2>{{ recipe.title }}</h2> <br>
      <img v-bind:src="recipe.image" alt="" :height="300">
      <hr> 
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "My Recipes",
      recipes: [],
    };
  },
  created: function () {
    console.log("creating.....");
    axios.get("/api/recipes").then((response) => {
      console.log(response.data);
      this.recipes = response.data;
    });
  },
  methods: {},
};
</script>