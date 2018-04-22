<template>
  <div class="hello">
    哈哈

    <myHeader></myHeader>

    <ul>
      <li>1{{msg}}</li>
      <li>2{{msg}}</li>
      <li>3{{msg}}</li>
      <li>4{{msg}}</li>
    </ul>

    <h5 v-for="item in dataList">
        {{item}}
    </h5>

  </div>
</template>

<script>

import myHeader from '../module/header'

export default {
  name: 'HelloWorld',
  data () {
    return {
      dataList:['a','b','c','d','e'],
      msg: 'Welcome to Your Vue.js App.Welcome to Your Vue.js App'
    }
  },

  created(){
    var a = [];
    for (var i = 0; i < 10; i++) {
      a[i] = function () {
        console.log(i);
      };
    }
    a[1](); // 10
    var b = [];
    for (let j = 0; j < 10; j++) {
      b[j] = function () {
        console.log(j);
      };
    }
    b[5](); // 6
  },
  components:{
    myHeader
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1,h2,h5{
  font-weight: normal;
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: block;
  text-align: left;
}
li {
  display: block;
  margin: 0;
  padding: 0;
  text-align: left;
}
a {
  color: #42b983;
}
</style>
