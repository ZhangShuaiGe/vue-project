<template>
    <div>
      <pubheader></pubheader>
      <div class="details_box">
        <!--帖子详情页面-->
        <el-row type="flex">
          <el-col :span="5"></el-col>
          <el-col :span="14" class="card_box">
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
          <el-col :span="5"></el-col>
        </el-row>

        <el-row type="flex" class="list_box">
          <el-col :span="5"></el-col>
          <el-col :span="14" class="bg">
            <div v-for="(list,index) in content.replies" class="discuss_box">
              <el-row type="flex">
                <!--内容-->
                <el-col :span="18">
                  <div>
                    <img class="post_avatar" :src="list.author.avatar_url" alt="">
                    <span>{{list.author.loginname}}</span>
                    <span>{{index+1}}楼</span>
                  </div>
                  <p class="liuyan" v-html="list.content"></p>
                </el-col>
                <!--点赞-->
                <el-col :span="6">
                  <a href="javascript:;" class="goods">点赞：</a>
                  <span>{{list.ups.length}}</span>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="5"></el-col>
        </el-row>
      </div>
      <pubfooter></pubfooter>
    </div>
</template>

<script>
    import pubheader from '../components/header.vue'
    import pubfooter from '../components/footer.vue'
    import axios from "axios"
    export default {
      name: '',
      components: {
        pubheader,
        pubfooter
      },
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
  body{
    font-family: "微软雅黑";
  }
  .details_box{
    .goods{
      content: "\f087";
    }
    background: #e1e1e1;
    .liuyan{
      margin-top: 10px;
    }
    .post_avatar{
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
    .bg{
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 30px;
    }
    .con_box{
      background: #fff;
    }
    .card_box{
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      margin-top:30px;
    }
    .list_box{
      margin-top: 30px;
    }
    .discuss_box{
      margin-bottom: 5px;
      border-bottom: 1px solid #ccc;
      padding: 10px;
    }
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

