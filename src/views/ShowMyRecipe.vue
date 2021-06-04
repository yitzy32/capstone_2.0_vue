<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <p>Title: {{ recipe.title }}</p>
      <p><img v-bind:src="recipe.image" alt="" height="200"></p>
        Ingredients:
      <div v-for="measurement in recipe.measurements">
        {{ measurement.amount }}
        {{ measurement.unit }}
        {{ measurement.name }}
      </div>
      <p>Prep Time: {{ recipe.prep_time }}</p>
      <p>Servings: {{ recipe.servings }}</p>
      Source Name: <a v-bind:href="recipe.source_url">{{ recipe.source_name }}</a>
      <p v-html="recipe.summary">Summary: {{ recipe.summary }}</p>
      <button v-on:click="makeRecipe()">Make this Recipe</button>
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
      message: "You are seeing one recipe",
      recipe: {},
    };
  },
  created: function () {
    console.log("showing one recipe");
    console.log(this.$route.params.id);
    axios.get("/api/recipes/" + this.$route.params.id).then((response) => {
      console.log(response.data);
      this.recipe = response.data;
    });
  },
  methods: {
    makeRecipe: function () {
      console.log("making recipe....");
      axios.patch("/api/recipes/" + this.$route.params.id).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>