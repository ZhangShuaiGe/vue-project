<template>
    <div class="box">
        <div>
          <el-row type="flex">
            <el-col :span="6"> </el-col>
            <el-col :span="12">
              <div class="nav">
                <a :class="{'active' : active === 1}" href="javascript:;" @click="add('',1)">全部</a>
                <a :class="{'active' : active === 2}" href="javascript:;" @click="add('good',2)">精华</a>
                <a :class="{'active' : active === 3}" href="javascript:;" @click="add('share',3)">分享</a>
                <a :class="{'active' : active === 4}" href="javascript:;" @click="add('ask',4)">问答</a>
                <a :class="{'active' : active === 5}" href="javascript:;" @click="add('job',5)">招聘</a>
              </div>
              <ul class="list">
                <li v-for="list in json">
                  <!--个人中心-->
                  <router-link :to="'/'" :title="list.author.loginname">
                    <img class="avatar" :src="list.author.avatar_url" alt="">
                  </router-link>
                  <span title="回帖">{{list.reply_count}}</span>
                  <span>/</span>
                  <span title="浏览">{{list.visit_count}}</span>
                  <span class="top" v-if="list.top">置顶</span>
                  <router-link :to="{name:'PostDetail',params:{'id':list.id}}">{{list.title}}</router-link>
                  <span class="time">{{list.last_reply_at}}</span>
                </li>
              </ul>
            </el-col>
            <el-col :span="6"> </el-col>
          </el-row>
          <template>
            <el-table v-loading="loading2" element-loading-text="拼命加载中" style="width: 100%;height: 300px">
            </el-table>
          </template>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
      name: 'app',
      data(){
        return {
          json: '',
          tab: '',
          page: '',
          active: 1,
          loading2: true
        }
      },
      mounted: function () {
        this.add("",1);
      },
      beforeUpdate: function () {
        this.loading2 = true;
      },
      update: function () {
        this.loading2 = true;
      },
      methods: {
        add: function (val,num) {
          this.active = num;
          axios.get("https://www.vue-js.com/api/v1/topics",{
              params: {
                  tab: val
              }
          })
          .then((result) => {
            this.json = result.data.data
          })
          .catch( (err)=> {
            alert(err)
          })
        }
      }
    }
</script>

<style lang="less" scoped>
  .time{
    float: right;
  }
  .box{
    font-size: 14px;
  }
  .top{
    background: #13CE66;
    color: #fff;
    display: inline-block;
    padding: 2px 5px;
    border-radius: 3px;
  }
  .nav{
    padding: 30px 0;
    a{
      margin-right: 10px;
      padding: 2px 10px;
      border-radius: 4px;
    }
    a.active{
      background: #13CE66;
      color: #fff;
    }
  }
  .list{
    .avatar{
      width: 25px;
      height: 25px;
    }
    li{
      margin-bottom: 30px;
    }
    a:hover{
      color: red;
    }
  }
</style>
