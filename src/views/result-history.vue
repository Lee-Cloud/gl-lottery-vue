<template>
  <div id="result-history">
    <!-- <header>
      <i class="icon-back" v-on:click="backwards"></i>
      大乐透开奖列表
    </header> -->
    <div class="space"></div>
    <ul class="result-list">
      <li v-for="result in results">
        <p class="info">{{result.date}}</p>
        <ul class="numbers">
          <li class="number" v-for="number in result.numbers">{{number}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    data(){
      return {
        results:[
          {date:"第454878期 2016-10-14",numbers:[10,11,12,13,15,16,20]},
          {date:"第454877期 2016-10-13",numbers:[10,11,12,13,15,16,20]},
          {date:"第454876期 2016-10-12",numbers:[10,11,12,13,15,16,20]},
        ]
      }
    },
    created (){
      this.$emit('viewIn',"开奖列表");
    },
  }
</script>
<style scoped>
  div.space {
    position: fixed;
    top: 0.9rem;
    left: 0;
    width: 100%;
    height: 0.12rem;
    background-color: #eee;
    /*border-bottom: 1px solid #ccc;*/
  }
  ul.result-list{
    width: 100%;
    padding-left: 0.21rem;
    margin-top: 0.12rem;
  }
  ul.result-list > li {
    padding: 0.24rem 0 0.29rem 0;
    border-bottom: 1px solid #eee;
  }
  p.info {
    color: #444;
    font-size: 0.22rem;
    line-height: 100%;
    margin-bottom: 0.24rem;
  }
  ul.numbers {
    overflow: hidden;
  }
  li.number {
    float: left;
    margin-right: 0.09rem;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    text-align: center;
    line-height: 0.7rem;
    color: #E73334;
  }
  li.number:nth-child(7),li.number:nth-child(6){
    color: #0C89E1;
  }
  ul.result-list > li:first-child > ul.numbers > li.number {
    background-color: #E73334;
    color: white;
  }
  ul.result-list > li:first-child > ul.numbers > li.number:nth-child(6),
  ul.result-list > li:first-child > ul.numbers > li.number:nth-child(7){
    background-color: #0C89E1;
  }
</style>
