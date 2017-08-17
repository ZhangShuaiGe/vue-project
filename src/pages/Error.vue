<template>
    <div>
      <Header></Header>
       <div class="text">
         404
       </div>
      <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../components/header.vue'
    import Footer from '../components/footer.vue'
    export default {
        name: 'app',
        components:{
          Header,
          Footer
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
