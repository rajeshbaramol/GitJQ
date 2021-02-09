<template>
  <div class="">
    <p v-html="data" style="place-self:center;width:60%;"></p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ViewReadmeFile',
  data() {
    return {
      data: '',
    };
  },
  created: function() {
    axios.get(`https://raw.githubusercontent.com/${this.$route.params.name}/${this.$route.params.id}/master/README.md`)
      .then((response) =>{
        this.data=response.data;
      })
      .catch((error)=> {
        this.data=JSON.stringify(error.stack);
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
