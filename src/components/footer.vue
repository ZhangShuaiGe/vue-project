<template>
  <div id="footer" class="footer" :class="{'footerfixed' : style === true }">
    <a href="#">© 2016 fishenal MIT</a>
  </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
  .footer{
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
  }
</style>
