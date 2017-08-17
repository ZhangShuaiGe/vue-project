<template>
    <div class="box">
        <pubheader></pubheader>
        <div>
          <el-row type="flex">
            <el-col :span="6"> </el-col>
            <el-col class="list_box" :span="12">
              <div class="nav">
                <a :class="{'active' : active === 1}" href="javascript:;" @click="nav('',1)">全部</a>
                <a :class="{'active' : active === 2}" href="javascript:;" @click="nav('good',2)">精华</a>
                <a :class="{'active' : active === 3}" href="javascript:;" @click="nav('share',3)">分享</a>
                <a :class="{'active' : active === 4}" href="javascript:;" @click="nav('ask',4)">问答</a>
                <a :class="{'active' : active === 5}" href="javascript:;" @click="nav('job',5)">招聘</a>
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
                  <span class="elite" v-else-if="list.good">精华</span>
                  <span v-else-if="list.tab === 'share'" class="share">分享</span>
                  <span v-else-if="list.tab === 'ask'" class="query">问答</span>
                  <span v-else-if="list.tab === 'job'" class="zhaopin">招聘</span>
                  <router-link :to="{name:'PostDetail',params:{'id':list.id}}">{{list.title}}</router-link>
                  <span class="time">{{list.last_reply_at}}</span>
                </li>
              </ul>
            </el-col>
            <el-col :span="6"> </el-col>
          </el-row>
        </div>
        <div class="loading" v-if="loding">
          <i class="el-icon-loading"></i>
          <span>玩命加载中...</span>
        </div>
        <div class="data_no" v-else>没有更多数据了...</div>
        <pubfooter></pubfooter>
    </div>
</template>

<script>
    import pubheader from '../components/header.vue'
    import pubfooter from '../components/footer.vue'
    import axios from 'axios'
    export default {
      name: 'app',
      components: {
        pubheader,
        pubfooter
      },
      data(){
        return {
          json: '',
          tab: '',
          page: 1,
          active: 1,
          scroll: '',
          loding: false,
        }
      },
      created: function () {
        this.nav("",1);
      },
      mounted() {
        var _this = this;
        window.addEventListener('scroll',function () {
          _this.scrollTop();
        });
      },
      methods: {
        nav: function (val,num) {
          this.active = num;
          axios.get("https://www.vue-js.com/api/v1/topics",{
              params: {
                tab: val,
              }
          })
          .then((result) => {
            this.json = result.data.data;
            this.tab = val;
            this.page = 1;
          })
          .catch( (err)=> {
            alert(err)
          })
        },
        scrollTop: function () {
//          卷上去的高度+可视区的高度 = body的总高度
          this.scroll = document.body.scrollTop;
//          body 总高度
          var bodyHeight = document.body.clientHeight;
//          可视区的高度
          var offsetHeight = document.documentElement.clientHeight;
//          大于body的总高度
          if(this.scroll + offsetHeight >= bodyHeight){
            var pages = this.page;
            axios.get("https://www.vue-js.com/api/v1/topics",{
                params: {
                  tab: this.tab,
                  page: ++pages
                }
            })
            .then((result) => {
                if(result.data.data.length == 0){
                  this.loding = false;
                  return ;
                }
                this.loding = true;
                setTimeout( () => {
                  for(let i = 0 ; i<result.data.data.length; i++){
                    this.json.push(result.data.data[i]);
                  }
                  this.page++
                },1000);
            })
            .catch( (err)=> {
                alert(err)
            })
          }
        }
      }
    }
</script>

<style lang="less" scoped>
  .loading{
    height: 20px;
    font-size: 18px;
    text-align: center;
    span{
      margin-left: 10px;
    }
  }
  .data_no{
    display: block;
    text-align: center;
    font-size: 14px;
  }
  .elite{
    background: #1D8CE0;
    color: #fff;
    display: inline-block;
    padding: 2px 5px;
    border-radius: 3px;
  }
  .share{
    background: #20A0FF;
    color: #fff;
    display: inline-block;
    padding: 2px 5px;
    border-radius: 3px;
  }
  .query{
    background: #F7BA2A;
    color: #fff;
    display: inline-block;
    padding: 2px 5px;
    border-radius: 3px;
  }
  .zhaopin{
    background:#FF4949;
    color: #fff;
    display: inline-block;
    padding: 2px 5px;
    border-radius: 3px;
  }
  .list_box{
    position: relative;
    .shade{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
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
      padding: 4px 10px;
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
