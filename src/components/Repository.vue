<template>
  <div class="">
    <section class="">
      <div class="">
        <div class="headerSec">
          <label>Username</label>
          <input type="text" v-model="userName" />
          <button v-on:click="onSearch">Search</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Repository',
  methods:{
      onSearch:function(){
          console.log(this.userName)
          this.$router.push('/username/'+this.userName)
          this.$emit('onSearch',this.userName)
      }
  },
  data() {
    return {
      repos: null,
      userName:'',

    };

  },
  created: function() {
   
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
