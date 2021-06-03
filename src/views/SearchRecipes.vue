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
      <img v-bind:src="recipe.image" :height="200"> <br>
      <button v-on:click="showRecipe(recipe)">View Recipe</button> <br> <br>
    </div>
    <dialog id="recipe-details">
      <form method="dialog">
        Title: {{ currentRecipe.title }} <br>
        Prep Time: {{ currentRecipe.prep_time }} <br>
        Servings: {{ currentRecipe.servings }} <br>
        <a v-bind:href="currentRecipe.source_url">{{ currentRecipe.source_name }}</a> <br>
        <img v-bind:src="currentRecipe.image" alt="" :height="200"><br>
        Summary: {{ currentRecipe.summary }} <br>
        <button v-on:click="saveRecipe()">Save This Recipe</button>
        <button>Close</button>
      </form>
    </dialog>
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
      currentRecipe: {
        id: "",
        title: "",
        prep_time: "",
        servings: "",
        source_name: "",
        source_url: "",
        image: "",
        summary: "",
      },
      id: "",
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
    showRecipe: function (recipe) {
      console.log("showing recipe...");
      this.currentRecipe = recipe;
      axios.get("/api/search_recipes/" + this.currentRecipe.id).then((response) => {
        console.log(response.data);
        console.log(response.data.prep_time);
        this.currentRecipe.id = response.data.id;
        this.currentRecipe.title = response.data.title;
        this.currentRecipe.prep_time = response.data.prep_time;
        this.currentRecipe.servings = response.data.servings;
        this.currentRecipe.source_name = response.data.source_name;
        this.currentRecipe.source_url = response.data.source_url;
        this.currentRecipe.image = response.data.image;
        this.currentRecipe.summary = response.data.summary;
        this.id = response.data.id;
        console.log("here is current recipe");
        console.log(this.currentRecipe);
      });
      document.querySelector("#recipe-details").showModal();
    },
    saveRecipe: function () {
      console.log("saving recipe");
      let params = {
        id: this.currentRecipe.id,
      };
      axios.post("/api/search_recipes", params).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>