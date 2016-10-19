<template>
  <div id="results">
    <div class="space"></div>
    <ul class="results-list">
      <li class="results-item" v-for="result in results">
        <router-link to="/results/result_history" class="link">
          <p class="result-info">
            <span class="type-name">{{result.title}}</span><span class="date">{{result.date}}</span>
          </p>
          <ul class=numbers>
            <li v-for="number in result.numbers" v-bind:class="[result.type]">{{number}}</li>
          </ul>
          <i class="icon-in"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
  export default {
    data(){
      return {
        results:[
          {type:"dlt",numbers:["01","02","03",10,15,18,32],title:"大乐透",date:"第4546465期 2016-10-13（周四）"},
          {type:"fc3d",numbers:["01","02","03"],title:"福彩3D",date:"第453434期 2016-10-12（周三）"},
          {type:"ssq",numbers:["01","02","03",10,15,18,32],title:"双色球",date:"第453434期 2016-10-12（周三）"},
          {type:"pls",numbers:[15,18,32],title:"排列三",date:"第453434期 2016-10-12（周三）"},
          {type:"plw",numbers:["01","02","03",10,15],title:"排列五",date:"第453434期 2016-10-12（周三）"},
          {type:"qxc",numbers:["01","02","03",10,15,18,24,32],title:"七星彩",date:"第453434期 2016-10-12（周三）"},
        ]
      }
    },
    created:function (){
      this.$emit('viewIn',"开奖结果");
    },
  }
</script>
<style scoped>
  div.space{
    position: fixed;
    top: 0.9rem;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 0.12rem;
    background-color: #eee;
    /*border-bottom: 1px solid #ccc;*/
  }
  ul.results-list{
    width: 100%;
    padding-left: 0.21rem;
    margin-top: 0.12rem;
  }
  li.results-item{
    position: relative;
    width: 100%;
    padding: 0.36rem 0;
    border-bottom: 1px solid #eee;
  }
  .link {
    display: block;
    width: 100%;
    height: 100%;
  }
  p.result-info{
    line-height: 100%;
  }
  span.type-name{
    color: #444;
    font-size: 0.28rem;
    margin-right: 0.15rem;
    line-height: 100%;
  }
  span.date{
    color: #888;
    font-size: 0.22rem;
    line-height: 100%;
  }
  ul.numbers {
    width: 100%;
    overflow: hidden;
    margin-top: 0.36rem;
  }
  ul.numbers > li {
    float: left;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    margin-right: 0.09rem;
    background-color: #E73334;
    color: white;
    font-size: 0.32rem;
    text-align: center;
    line-height: 0.7rem;
  }
  li.dlt:nth-child(6),li.dlt:nth-child(7) {
    background-color: #0C89E1
  }
  li.ssq:nth-child(7) {
    background-color: #0C89E1
  }
  li.qxc:nth-child(8) {
    background-color: #0C89E1
  }
  i.icon-in {
    position: absolute;
    top: 50%;
    right: 0.3rem;
    transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    width: 0.18rem;
    height: 0.33rem;
    background-image: url("../assets/ico_into.png");
    background-size: 100% 100%;
  }
</style>
