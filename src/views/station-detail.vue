<template>
  <div id="stations-detail">
    <header>
      <i class="icon-back" v-on:click="backwards"></i>
      投注站
    </header>
    <ul class="tabs">
      <li v-on:click="tab_intro" v-bind:class="{active:isIntro}">站点介绍</li>
      <li v-on:click="tab_pic" v-bind:class="{active:!isIntro}">站点照片</li>
    </ul>
    <div class="content" v-if="isIntro">
      <p class="content-title">天天大奖彩票站</p>
    </div>
    <div class="station-pic">

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
    methods:{
      backwards: function(){
        history.go(-1);
      },
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
</style>
