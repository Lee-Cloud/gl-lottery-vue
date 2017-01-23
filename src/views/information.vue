<template>
  <div id="information">
    <ul class="info-list">
      <li class="information" v-for="news in newslist">
        <router-link to="information/information_detail" class="link">
          <img v-bind:src="news.picUrl" alt="" />
          <ul class="info-preview">
            <li class="info-preview-titile">{{news.title}}</li>
            <li class="info-preview-content">{{news.description}}</li>
            <li class="info-preview-date">{{news.ctime}}</li>
          </ul>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue';
import VueResource from 'vue-resource';
import Loadmore from 'vue-loadmore';
Vue.use(VueResource);
  export default {
    data(){
      return {
        newslist:[]
      }
    },
    created (){
      this.$emit('viewIn',"购彩资讯");
      this.update();
    },
    methods:{
      update:function(){
        this.$http.get('http://apis.baidu.com/txapi/tiyu/tiyu',{
          param:{
            num:10
          },
          headers:{
            apikey:'cf9eaf021a2acdaea3a658c3bc9088ff'
          }
        })
        .then(
          function(response){
            console.log(response.body.newslist);
            this.$set(this,'newslist', response.body.newslist);
          },
          function(response){
            console.log(response)
          }
        )
      }
    }
  }
</script>
<style>
  ul.info-list {
    width: 100%;
    padding:0 0.21rem;
  }
  li.information {
    position: relative;
    width: 100%;
    height: 1.56rem;
    padding-top: 0.23rem;
    border-bottom: 1px solid #eee;
  }
  .link{
    display: block;
    width: 100%;
    height: 100%;
  }
  li.information .link > img {
    float: left;
    width: 1.5rem;
    height: 1.1rem;
  }
  ul.info-preview {
    position: absolute;
    top: 0.23rem;
    left: 1.71rem;
    width: 5.04rem;
  }
  li.info-preview-titile{
    margin-bottom: 0.21rem;
    color: #444;
    font-size: 0.26rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 100%;
  }
  li.info-preview-content{
    color: #888;
    font-size: 0.22rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    /*line-height: 100%;*/
    text-align: justify;
  }
  li.info-preview-date{
    color: #888;
    font-size: 0.18rem;
    text-align: right;
    /*line-height: 100%;*/
  }
</style>
