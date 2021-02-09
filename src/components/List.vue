<template>
  <div class="">
    <div class="container">
      <div class="table-container">
        <table class="">
          <thead>
            <tr>
              <th>Project names</th>
            </tr>
          </thead>
            <ul v-for="repo in repos" v-bind:key="repo.id">
                  <li ><router-link v-bind:to="'/projects/'+id+'/'+repo.name"> {{repo.name}}</router-link></li>
            </ul>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'List',
  data() {
    return {
      repos: null,
      id:this.$route.params.id,
      name:this.$route.params.name

    };
  },
  created: function() {
    axios.get(`https://api.github.com/users/${this.$route.params.id}/repos?per_page=100"/`).then((response) => {
      this.repos = response.data;
    });
  },
};
</script>

<style>
body {
  font: 15px/1.8 'Poppins', sans-serif !important;
}
.headerSec {
  padding: 5px;
}
label {
  padding: 5px;
}
input {
  width: 300px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
}
button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 10px;
}
.table td,
.table th {
  padding: 20px !important;
}
</style>
