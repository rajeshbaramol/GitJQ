<template>
  <header v-on:onSearch="onSearch($event)">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 class="title">GitJQ</h1>
   <p> {{userName}}</p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    onSearch: function(name) {
        console.log(name)
    //   this.userName = name;
    },
  },
  data() {
    return {
      repos: null,
      userName: '',
    };
  },
};
</script>

<style>
header {
  height: 100px;
  width: 100%;
  background-image: linear-gradient(to right, #0aa6ca, yellow);
  display: flex;
}
img {
  height: 80px;
}
</style>
