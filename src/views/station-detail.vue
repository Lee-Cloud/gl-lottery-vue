<template>
  <div id="stations-detail">
    <ul class="tabs">
      <li v-on:click="tab_intro" v-bind:class="{active:isIntro}">站点介绍</li>
      <li v-on:click="tab_pic" v-bind:class="{active:!isIntro}">站点照片</li>
    </ul>
    <div class="content" v-show="isIntro">
      <p class="content-title">天天大奖彩票站</p>
      <div class="table1">
        <p class="tr">
          <span>营业时间</span>
          <span>认证情况</span>
        </p>
        <p class="td">
          <span>--</span>
          <span>担保认证</span>
        </p>
      </div>
      <ul class="table2">
        <li>
          <span class="table2-title">站点类型</span>
          <span class="table2-content">双机店</span>
        </li>
        <li>
          <span class="table2-title">接票状态</span>
          <span class="table2-content">正常姐票</span>
        </li>
        <li>
          <span class="table2-title">店主名称</span>
          <span class="table2-content">张先生</span>
        </li>
        <li>
          <span class="table2-title">经营时间</span>
          <span class="table2-content">一年</span>
        </li>
      </ul>
    </div>
    <div class="station-pic" v-show="!isIntro">
      <div class="img"></div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data(){
      return {
        isIntro : true
      }
    },
    created (){
      this.$emit('viewIn',"投注站详情");
    },
    methods:{
      tab_intro: function(){
        this.isIntro = true;
      },
      tab_pic: function(){
        this.isIntro = false;
      }
    }
  }
</script>
<style>
  ul.tabs {
    width: 100%;
    height: 0.84rem;
    overflow: hidden;
    border-bottom: 1px solid #eee;
  }
  ul.tabs > li {
    position: relative;
    float: left;
    width: 50%;
    height: 0.84rem;
    font-size: 0.32rem;
    color: #888;
    text-align: center;
    line-height: 0.84rem;
  }
  ul.tabs > li.active {
    color: #dc3b40 ;
  }
  ul.tabs >li:first-child::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    width: 1px;
    height: 0.4rem;
    background-color: #eee;
  }
  div.content {
    padding: 0 0.31rem;
  }
  div.content > p.content-title {
    margin-top: 0.5rem;
    font-size: 0.4rem;
    color: #444;
    line-height: 100%;
  }
  div.table1 {
    width:100%;
    height:1.24rem;
    margin-top: 0.39rem;
  }
  div.table1 > p {
    width: 100%;
    height: 50%;
    overflow: hidden;
  }
  p.tr > span {
    float: left;
    width: 50%;
    height: 0.62rem;
    background-color: #eee;
    font-size: 0.24rem;
    color: #444;
    text-align: center;
    line-height: 0.62rem;
    border: 1px solid #ccc;
  }
  p.td > span {
    float: left;
    width: 50%;
    height: 0.62rem;
    font-size: 0.24rem;
    color: #dc3b40;
    text-align: center;
    line-height: 0.62rem;
    border: 1px solid #ccc;
    margin-top: -1px;
  }
  div.table1 > p > span:nth-child(even){
    margin-left: -1px;
  }
  ul.table2 {
    width: 100%;
    margin-top: 0.36rem
  }
  ul.table2 > li {
    width: 100%;
    height: 0.55rem;
    overflow: hidden;
    font-size: 0.26rem;
    margin-bottom: 0.04rem;
  }
  span.table2-title {
    float: left;
    width: 1.61rem;
    height: 100%;
    background-color: #E5E5E5;
    color: #666;
    text-align: center;
    line-height: 0.55rem;
  }
  span.table2-content {
    float: left;
    width: 4.97rem;
    height: 100%;
    padding-left: 0.3rem;
    background-color: #eee;
    color: #888;
    text-align: left;
    line-height: 0.55rem;
  }
  div.img {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    width: 1.76rem;
    height: 1.33rem;
    background-image: url("../assets/ico_nopic.png");
    background-size: 100% 100%;
  }
  div.img::after {
    content: "暂无图片";
    position: absolute;
    width: 1.76rem;
    bottom: -0.6rem;
    left: 0;
    text-align: center;
    color: #888;
    font-size: 0.32rem;
  }
</style>
