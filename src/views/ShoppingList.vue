<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p v-for="item in shoppingList">
      {{ item.name }}
      {{ item.amount }}
      {{ item.unit }}
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
      message: "Shopping List",
      shoppingList: [],
    };
  },
  created: function () {
    console.log("in created");
    axios.get("/api/shopping_list").then((response) => {
      console.log(response.data);
      this.shoppingList = response.data;
    });
  },
  methods: {},
};
</script>