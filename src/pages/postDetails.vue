<template>
    <div class="details_box">
        <!--帖子详情页面-->
        <el-row type="flex">
          <el-col :span="6"></el-col>
          <el-col :span="12">
            <div>
              <h3><span v-if="content.top" class="">置顶</span>{{content.title}}</h3>
              <el-row type="flex">
                <el-row :span="6"><img class="avatar" :src="content.author.avatar_url" alt=""></el-row>
                <el-row :span="6">作者：{{content.author.loginname}}</el-row>
                <el-row :span="6">浏览：{{content.visit_count}}</el-row>
                <el-row :span="6">回复：{{content.reply_count}}</el-row>
              </el-row>
            </div>
            <div v-html="content.content"></div>
          </el-col>
          <el-col :span="6"></el-col>
        </el-row>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
      name: 'app',
      data () {
          return {
            content: ''
          }
      },
      created: function () {
        var id = this.$route.params.id;
        axios.get('https://www.vue-js.com/api/v1/topic/' + id )
          .then((result) => {
            this.content = result.data.data
          })
          .catch( (err) => {
              alert(err)
          })
      },
      methods: {

      }
    }
</script>

<style lang="less">
  .details_box{
    h1,h2{
      margin:20px 0;
      font-size: 20px;
    }
    h3{
      margin: 20px 0;
      text-align: center;
    }
    .el-row{
      align-items: center;
      justify-content: center;
      &>div{
        margin-right: 30px;
      }
    }
    .avatar{
      width: 50px;
      height: 50px;
      vertical-align: middle;
    }
    .top{
      background: #13CE66;
      border-radius: 2px 5px;
      color:#fff;
    }
  }
</style>
