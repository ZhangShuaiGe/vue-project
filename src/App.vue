<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {

      }
    }
  }
</script>

<style>
  body{
    font-family: "微软雅黑";
  }
  *{
    margin:0;
    padding: 0;
  }
  img{
    border:none;
    vertical-align: middle;
  }
  a{
    text-decoration: none;
    color: #333;
  }
  ul,li{
    list-style: none;
  }
</style>
