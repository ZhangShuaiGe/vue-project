<template>
    <div>
      <pubheader></pubheader>
      <div v-if="!vlogin">
          <el-row type="flex">
            <el-col :span="5"></el-col>
            <el-col :span="14" class="con">
              <el-input v-model="input" placeholder="请输入accessToken登录"></el-input>
              <el-button type="primary" class="submit" @click="login">登录</el-button>
            </el-col>
            <el-col :span="5"></el-col>
          </el-row>
      </div>

      <el-row type="flex" v-else>
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
      name: 'login',
      components: {
        pubheader,
        pubfooter
      },
      data () {
        return {
          input: '',
          vlogin: this.$store.state.login,
          data: '',
        }
      },
      computed: {
        rsetLogin () {
            return this.$store.state.login;
        }
      },
      watch: {
        rsetLogin: function (val) {
          this.vlogin = val;
        }
      },
      methods: {
        login: function () {
            axios.post("https://www.vue-js.com/api/v1/accesstoken",{
              accesstoken: this.input
            })
            .then((result) => {
                this.open();
                this.data = result.data;
                this.$store.state.username = result.data.loginname;
                this.vlogin = true;
//                存储登陆信息
                window.localStorage.setItem("login",result.data.loginname);
                this.$store.state.login = true;
            })
            .catch((err) => {
                if(err){
                  alert("登录失败，重新尝试登录");
                }
            })
        },
        open () {
          this.$message({
            message: '登陆成功',
            type: 'success',
            duration: 1000
          });
        },
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
</style>
