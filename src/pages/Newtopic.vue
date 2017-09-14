<template>
    <div>
        <pubheader></pubheader>
        <el-row type="flex">
          <el-col :span="6"></el-col>
          <el-col :span="12">
            <el-breadcrumb separator="/" class="nav">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>发布话题</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="content">
              选择版块:
              <el-select v-model="type" placeholder="请选择">
                <el-option :label="'weex'" value="weex">weex</el-option>
                <el-option :label="'分享'" value="share">分享</el-option>
                <el-option :label="'问答'" value="ask">问答</el-option>
                <el-option :label="'招聘'" value="job">招聘</el-option>
              </el-select>
              <!--<h3>标题:</h3>-->
              <el-input class="title" v-model="title" placeholder="请输入标题10个字以上"></el-input>
              <!-- 使用双向绑定修饰符 -->
              <mavonEditor v-model="content" ></mavonEditor>
              <el-button type="primary" :loading="loading" @click="submit">发布</el-button>
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
    import axios from 'axios'
    import { mavonEditor } from 'mavon-editor'
    export default {
      name: '',
      components: {
        pubheader,
        pubfooter,
        mavonEditor
      },
      data () {
        return {
          type: '',
          title: '',
          content: '',
          loading: false
        }
      },
      methods: {
        submit: function () {

          axios.post('https://www.vue-js.com/api/v1/topics', {
            accesstoken: this.$store.state.username,
            title: this.title,
            tab: this.type,
            content: this.content
          })
          .then(function(response) {
              alert("发表成功");
          })
          .catch(function(error) {
              alert(err)
          })
        },
      }
    }
</script>

<style scoped lang="less">
  .nav{
    font-size: 16px;
    margin:20px 0;
  }
  .content{
    h3{
      font-size:16px;
      margin: 15px 0;
      font-weight: normal;
    }
    .title{
      margin: 20px 0 20px 0;
    }
  }
</style>
