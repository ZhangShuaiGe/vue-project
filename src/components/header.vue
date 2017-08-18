<template>
  <div class="head">
    <el-row>
      <el-col :span="6"></el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-row>
            <el-col :span="12">
              <router-link :to="'/'"><img class="logo" src="../assets/images/logo.png" alt=""></router-link>
            </el-col>
            <el-col :span="12" class="nav">
              <router-link :to="'/'">首页</router-link>
              <!--<a href="http://doc.vue-js.com" target="_blank">vue2.0文档</a>-->
              <router-link v-if="!login" :to="'/login'">登录</router-link>
              <router-link v-if="login" :to="'/personal'">欢迎：{{username}}</router-link>
              <router-link v-if="login" :to="'/personal'">个人中心</router-link>
              <router-link v-if="login" :to="'/newtopic'">发帖</router-link>
              <a href="javascript:;" v-if="login" @click="loginout">退出</a>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: 'app',
      data () {
        return {
          login:this.$store.state.login,
          username: this.$store.state.username
        }
      },
      computed: {
        addlogin () {
          return this.$store.state.login ;
        },
        adduser () {
          return this.$store.state.username ;
        }
      },
      watch: {
        addlogin: function (val) {
          this.login = val;
        },
        adduser: function (val) {
          this.username = val;
        }
      },
      methods: {
//        退出登陆
        loginout: function () {
          this.login = this.$store.state.login = false;
          this.open();
        },
        open () {
          this.$message({
            message: '退出成功',
            type: 'success',
            duration: 1000
          });
        },
      }
    }
</script>

<style lang="less">
  .head {
    height: 80px;
    width: 100%;
    line-height: 80px;
    background-color: rgb(32, 160, 255);
    a {
      color: #fff;
    }
    div {
      height: 100%;
    }
    .nav a {
      margin-right: 30px;
      font-size: 18px;
    }
    .logo {
      height: 50px;
      width: 50px;
    }
  }
</style>
