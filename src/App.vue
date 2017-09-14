<template>
  <div id="app">
    <keep-alive>
       <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import pubheader from './components/header.vue'
  import pubfooter from './components/footer.vue'
  export default {
    name: 'app',
    data () {
      return {

      }
    },
    beforeCreate () {
      let login =  localStorage.getItem("login");
      if(login != null){
        this.$store.state.login = true;
        this.$store.state.username = login;
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
  .fixed_footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
