<template>
  <div id="app">
    <AppHeader v-on:onSearch="onSearch($event)"/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
export default {
  name: "App",
  components: {
    AppHeader,
  },
  methods: {
    onSearch: function(name) {
        console.log(name)
    //   this.userName = name;
    },
  },
};
</script>

<style>
</style>
