<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p v-for="item in shoppingList">
      {{ item.name }}
      {{ item.amount }}
      {{ item.unit }}
    </p>
    <!-- <p>Name: <input type="text" v-model="newName"></p> -->
    <p> Name
      <select v-model="newName" id="">
        <option v-for="ingredient in ingredients">{{ingredient.name}}</option>
      </select>
    </p>
    <p> Unit
        <select v-model="newUnit" id="">
          <option>Cups</option>
          <option>Tablespoons</option>
          <option>Teaspoons</option>
          <option>Ounces</option>
        </select>
      </p>
    <p>
      Amount: <input type="text" v-model="newAmount">
    </p>
    <button v-on:click="addItem">Add Item</button>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Shopping List",
      shoppingList: [],
      ingredients: [],
      newName: "",
      newUnit: "",
      newAmount: "",
    };
  },
  created: function () {
    console.log("in created");
    axios.get("/api/shopping_list").then((response) => {
      console.log(response.data);
      this.shoppingList = response.data;
    });

    axios.get("/api/ingredients").then((response) => {
      console.log(response.data);
      this.ingredients = response.data;
    });
  },
  methods: {
    addItem: function () {
      console.log("adding...");
      let params = {
        name: this.newName,
        unit: this.newUnit,
        amount: this.newAmount,
      };
      axios.post("/api/shopping_list", params).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>