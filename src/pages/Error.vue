<template>
    <div>
      <pubheader></pubheader>
       <div class="text">
         404
       </div>
      <pubfooter></pubfooter>
    </div>
</template>

<script>
    import pubheader from '../components/header.vue'
    import pubfooter from '../components/footer.vue'
    export default {
        name: 'app',
        components:{
          pubheader,
          pubfooter
        }
    }
</script>

<style scoped>
  .text{
    text-align: center;
    font-size: 30px;
    margin: 50px;
  }
</style>
