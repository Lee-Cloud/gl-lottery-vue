<template>
  <div id="information-detail">
    <!-- <header>
      <i class="icon-back" v-on:click="backwards"></i>
      资讯详情
    </header> -->
    <div class="content">
      <div class="information-title">
        <h1>独家评论：莱斯特花一亿英镑买张琳芃也不亏</h1>
        <p>05-24 11:23</p>
      </div>
      <div class="information-content">
        <img src="" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    created (){
      this.$emit('viewIn',"资讯详情");
    },
    methods: {
      backwards: function(){
        history.go(-1)
      }
    }
  }
</script>
<style scoped>
  div.content {
    width: 100%;
    padding: 0 0.21rem;
  }
  div.information-title {
    width: 100%;
    border-bottom: 1px solid #eee;
  }
  div.information-title > h1 {
    color: #444;
    font-size: 0.36rem;
    margin: 0.21rem 0;
  }
  div.information-title > p {
    color: #ccc;
    font-size: 0.24rem;
    margin-bottom: 0.21rem;
  }
  div.information-content {
    padding-top: 0.33rem;
  }
  div.information-content > p {
    color: #666;
    font-size: 0.28rem;
    text-align: justify;
    text-indent: 0.56rem;
  }
  div.information-content > img {
    width: 100%;
    height: 3rem;
  }
</style>
