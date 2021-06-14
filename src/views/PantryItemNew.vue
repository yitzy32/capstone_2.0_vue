<template>
  <div class="pantry-item-new">
    <h1>{{ message }}</h1>
    <form v-on:submit.prevent="newPantryItem()">
      <p> Name 
          <select v-model="name" id="">
            <option v-for="ingredient in ingredients">{{ingredient.name}}</option>
          </select>
      </p>
      <p> Unit
        <select v-model="unit" id="">
          <option>Cups</option>
          <option>Tablespoons</option>
          <option>Teaspoons</option>
          <option>Ounces</option>
        </select>
      </p>
      <p>
        Amount <input list="ingredients" v-model="starting_amount">
      </p>
      <button>Add Item</button>
    </form>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Add A New Item",
      name: "",
      unit: "",
      starting_amount: "",
      ingredients: [],
    };
  },
  created: function () {
    axios.get("/api/ingredients").then((response) => {
      console.log(response.data);
      this.ingredients = response.data;
    });
  },
  methods: {
    newPantryItem: function () {
      console.log("hi there");
      let params = {
        name: this.name,
        unit: this.unit,
        starting_amount: this.starting_amount,
      };
      axios.post("/api/pantry_items", params).then((response) => {
        console.log(response.data);
        this.$router.push("/pantry_items");
      });
    },
  },
};
</script>