<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p v-for="item in shoppingList">
      {{ item.name }}
      {{ item.amount }}
      {{ item.unit }}
    </p>
    <p> Name
      <select v-model="newName" id="">
        <option v-for="item in pantry_items">{{item.name}}</option>
      </select>
    </p>
    <p> Unit
        <select v-model="newUnit" id="">
          <option>Cups</option>
          <option>Tablespoons</option>
          <option>Teaspoons</option>
          <option>Ounces</option>
          <option>Pounds</option>
        </select>
      </p>
    <p>
      Amount: <input type="text" v-model="newAmount">
    </p>
    <button v-on:click="addItem">Add Item</button>
    <button v-on:click="boughtList">Bought this list</button>
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
      pantry_items: [],
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

    axios.get("/api/pantry_items").then((response) => {
      console.log(response.data);
      this.pantry_items = response.data;
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
        this.$router.go(); // reloads page
      });
    },
    boughtList: function () {
      axios.patch("/api/pantry_items").then((response) => {
        console.log(response.data);
        this.$router.push("/pantry_items");
      });
    },
  },
};
</script>