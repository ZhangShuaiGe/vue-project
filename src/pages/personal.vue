<template>
    <div class="personal">
        <pubheader></pubheader>
        <el-row type="flex">
          <el-col :span="6"></el-col>
          <el-col :span="12">
            <el-breadcrumb separator="/" class="nav">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>个人中心</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="self">
              <img :src="data.avatar_url" alt="">
              <span>{{data.loginname}}</span>
              <p>积分：{{data.score}}</p>
              <p>注册日期：{{data.create_at}}</p>
              <p>收藏话题：{{data.collect_topics.length}} 个</p>
            </div>
            <div class="topic">
              <h3>最近创建的话题</h3>
              <ul>
                <li v-for="list in data.recent_topics">
                  <img :src="data.avatar_url" alt="">
                  <router-link :to="{ name:'PostDetail',params:{ id:list.id } }">{{list.title}}</router-link>
                </li>
              </ul>
            </div>
            <div class="huati">
              <h3>最近参与的话题</h3>
              <ul>
                <li v-for="list in data.recent_replies">
                  <img :src="list.author.avatar_url" alt="" :title="list.author.loginname">
                  <router-link :to="{ name:'PostDetail',params:{ id:list.id } }">{{list.title}}</router-link>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="6"></el-col>
        </el-row>
        <pubfooter class="fixed_footer"></pubfooter>
    </div>
</template>

<script>
    import pubheader from '../components/header.vue'
    import pubfooter from '../components/footer.vue'
    import axios from "axios"
    export default {
      name: 'personal',
      components:{
        pubheader,
        pubfooter
      },
      data () {
        return {
            data:''
        }
      },
      mounted () {
        var username = this.$store.state.username;
        axios.get("https://www.vue-js.com/api/v1/user/"+ username)
        .then((result) => {
            this.data = result.data.data;
            console.log(result)
        })
        .catch((err) => {
            alert("异常了");
        })
      }
    }
</script >

<style scoped lang="less">
  .nav{
    font-size: 16px;
    margin:20px 0;
  }
  .topic,.huati{
    border-radius: 10px;
    margin-top: 30px;
    border:1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 2px #ccc;
    a:hover{
      color: #005580;
      text-decoration: underline;
    }
    h3{
      margin-bottom: 15px;
    }
    img{
      width: 40px;
      height: 40px;
    }
    li{
      margin-bottom: 20px;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
  .self{
    border:1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    background: #fff;
    box-shadow: 2px 2px 4px #ccc;
    img{
      width: 40px;
      height: 40px;
    }
    span{
      font-size:14px;
    }
    p{
      padding: 5px 0;
    }
  }
</style>
