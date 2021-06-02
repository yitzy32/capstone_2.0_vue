<template>
  <div class="recipes-searh">
    <h1>{{ message }}</h1>
    <form v-on:submit.prevent="searchRecipes()">
      <p>
        <input type="text" v-model="search">
      </p>
      <p>
        <button>Search</button>
      </p>  
    </form>
    <div v-for="recipe in recipes">
      {{ recipe.title }} <br>
      <img v-bind:src="recipe.image" :height="200">
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
      message: "Search Recipes",
      recipes: [],
      search: "",
    };
  },
  created: function () {},
  methods: {
    searchRecipes: function () {
      let params = {
        search: this.search,
      };
      axios.get(`/api/search_recipes?search=${this.search}`).then((response) => {
        console.log(response.data);
        this.recipes = response.data;
        console.log(params.search);
      });
    },
  },
};
</script>