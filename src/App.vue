<template>
  <div id="app">
    <header>
      <i class="icon-back" v-on:click="backwards" v-if="title!='咕啦彩票'"></i>
      {{title}}
    </header>
    <transition :name="transitionName">
      <router-view class="view" v-on:viewIn="changeTitle"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title:"咕啦彩票",
      transitionName:""
    }
  },
  methods:{
    backwards: function(){
      // history.go(-1);
      history.back();
    },
    changeTitle: function(value){
      this.title = value;
    }
  },
  watch: {
    '$route' (to, from) {
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
    if(to.path=="/"){
      this.transitionName = 'slide-right';
    }else if((to.path=="/lotteries")&&(from.path!="/")){
      this.transitionName = 'slide-right';
    }else{
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
  },
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  body {
    position: relative;
    width: 7.2rem;
    height: 100%;
    font-size: 0.3rem;
    font-family: 微软雅黑;
    background-color: white;
  }
  ul,
  ol,
  dl{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  input {
    -webkit-appearance : none;
  }
  #app {
    width: 7.2rem;
    height: 100%;
    padding-top: 0.9rem;
  }
  .view {
    position: absolute;
    top: 0;
    left: 0;
    width: 7.2rem;
    height: 100%;
    padding-top: 0.9rem;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  header{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.9rem;
    background-color: #dc3d40;
    /*background-color: #2186DB;*/
    font-size: 0.36rem;
    color: white;
    text-align: center;
    line-height: 0.9rem;
  }
  header > .icon-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.18rem;
    height: 0.38rem;
    margin: 0.26rem 0.23rem;
    background-image: url("./assets/ico_back.png");
    background-size: 100% 100%;
  }
  .slide-left-enter-active {
    animation: slide-left-in 0.3s ease-in-out;
    -webkit-animation: slide-left-in 0.3s ease-in-out;
  }
  .slide-left-leave-active{
    animation: slide-left-out 0.3s ease-in-out;
    -webkit-animation: slide-left-out 0.3s ease-in-out;
  }
  @keyframes slide-left-in {
    0% {transform: translate3d(100%,0,0)}
    100% {transform: translate3d(0,0,0)}
  }
  @keyframes slide-left-out {
    0% {transform: translate3d(0,0,0)}
    100% {transform: translate3d(-100%,0,0)}
  }
  @-webkit-keyframes slide-left-in {
    0% {-webkit-transform: translate3d(100%,0,0)}
    100% {-webkit-transform: translate3d(0,0,0)}
  }
  @-webkit-keyframes slide-left-out {
    0% {-webkit-transform: translate3d(0,0,0)}
    100% {-webkit-transform: translate3d(-100%,0,0)}
  }
  .slide-right-enter-active {
    animation:slide-right-in 0.3s ease-in-out;
    -webkit-animation:slide-right-in 0.3s ease-in-out;
  }
  .slide-right-leave-active {
    animation:slide-right-out 0.3s ease-in-out;
    -webkit-animation:slide-right-out 0.3s ease-in-out;
  }
  @keyframes slide-right-in {
    0% {transform: translate3d(-100%,0,0)}
    100% {transform: translate3d(0,0,0)}
  }
  @keyframes slide-right-out {
    0% {transform: translate3d(0,0,0)}
    100% {transform: translate3d(100%,0,0)}
  }
  @-webkit-keyframes slide-right-in {
    0% {-webkit-transform: translate3d(-100%,0,0)}
    100% {-webkit-transform: translate3d(0,0,0)}
  }
  @-webkit-keyframes slide-right-out {
    0% {-webkit-transform: translate3d(0,0,0)}
    100% {-webkit-transform: translate3d(100%,0,0)}
  }
</style>
