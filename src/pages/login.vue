<template>
    <div>
      <pubheader></pubheader>

      <div v-if="show">
          <el-row type="flex">
            <el-col :span="5"></el-col>
            <el-col :span="14" class="con">
              <el-input v-model="input" placeholder="请输入accessToken登录"></el-input>
              <el-button type="primary" class="submit" @click="login">登录</el-button>
            </el-col>
            <el-col :span="5"></el-col>
          </el-row>
      </div>

      <el-row v-else="show" type="flex">
         <el-col :span="5"></el-col>
         <el-col :span="14" class="login_xinxi">
            <img :src="data.avatar_url" alt="">
            <br>
            <span class="login_name">{{data.loginname}}</span>
            <br>
            <el-button type="primary">个人中心</el-button>
         </el-col>
         <el-col :span="5"></el-col>
      </el-row>

      <pubfooter class="fixed_footer"></pubfooter>
    </div>
</template>

<script>
    import pubheader from '../components/header.vue'
    import pubfooter from '../components/footer.vue'
    import axios from 'axios'
    export default {
      name: '',
      components: {
        pubheader,
        pubfooter
      },
      data () {
        return {
          input: '',
          show: true,
          data: ''
        }
      },
      methods: {
        login: function () {
            axios.post("https://www.vue-js.com/api/v1/accesstoken",{
              accesstoken: this.input
            })
            .then((result) => {
                console.log(result.data);
                this.data = result.data;
                this.show = false;
                var token = this.input;
                result.data.token = token;
                var json = JSON.stringify(result.data);
                window.localStorage.setItem("login",json);
            })
            .catch((err) => {
                if(err){
                  alert("登录失败，重新登录尝试");
                }
            })
        }
      }
    }
</script>

<style scoped>
  .login_name{
    display: inline-block;
    margin: 20px 0;
  }
  .login_xinxi{
    text-align: center;
    margin: 50px;
  }
  .con{
      margin:30px;
  }
  .submit{
    margin-top: 20px;
  }
  .fixed_footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
