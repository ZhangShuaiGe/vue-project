<template>
    <div>
        <!--head-->
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
                    <router-link :to="'/message'">未读消息</router-link>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          </el-row>
        </div>
        <!--/ head-->

        <div class="continar">
          <router-view></router-view>
        </div>

        <!--footer-->
        <div class="footer"><a href="#">© 2016 fishenal MIT</a></div>
        <!--/ footer-->
    </div>
</template>

<script>
    export default {
      name: 'app',
      data () {
        return {
            activeIndex: '1',
            activeIndex2: '2',
            data: 'detail'
        }
      },
      methods: {

      }
    }
</script>

<style lang="less">
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
  .logo{
    height: 50px;
    width: 50px;
  }
  .head{
    height: 80px;
    width: 100%;
    line-height: 80px;
    background-color: rgb(32, 160, 255);
    a{
      color: #fff;
    }
    div{
      height: 100%;
    }
    .nav a{
      margin-right: 30px;
    }
  }
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

