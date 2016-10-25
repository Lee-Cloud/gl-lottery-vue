<template lang="html">
  <div id="bei-submit">
    <div class="bei-box">
      <ul class="bei">
        <li class="reduce" v-on:click="reduce"></li>
        <li  class="num">{{bei}}</li>
        <li class="add" v-on:click="add"></li>
      </ul>
    </div>
    <div class="count-box">
      <p class="count"><span>{{2*bei*zhu}}</span> 元</p>
      <p class="info">1注 {{bei}}倍</p>
    </div>
    <input type="button" value="投注" class="submit-btn">
  </div>
</template>

<script>
export default {
  data () {
    return {
      bei:1,
      zhu:1
    }
  },
  computed: {},
  mounted () {},
  methods: {
    reduce:function(){
      this.bei>1&&this.bei--;
    },
    add:function(){
      this.bei++;
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
  #bei-submit {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1rem;
    border-top: 1px solid #ccc;
    background-color: white;
  }
  div.bei-box {
    float: left;
    position: relative;
    width: 50%;
    height: 100%;
  }
  ul.bei {
    box-sizing: content-box;
    position: relative;
    width: 2rem;
    height: 0.51rem;
    margin: 0.245rem auto;
    border-radius: 0.1rem;
  }
  ul.bei > li {
    float: left;
    width: 33.3333%;
    height: 100%;
    font-size: 0.28rem;
    color: #888;
    line-height: 0.51rem;
    text-align: center;
  }
  ul.bei > li.reduce {
    background-image: url('../assets/button_reduce.png');
    background-size: 100% 100%;
  }
  ul.bei > li.add {
    background-image: url('../assets/button_add.png');
    background-size: 100% 100%;
  }
  ul.bei > li.num {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  ul.bei::before {
    content: "买";
    position: absolute;
    top: 0;
    left: -0.4rem;
    height: 0.51rem;
    line-height: 0.51rem;
    font-size: 0.32rem;
    color: #888;
  }
  ul.bei::after {
    content: "倍";
    position: absolute;
    top: 0;
    right: -0.4rem;
    height: 0.51rem;
    line-height: 0.51rem;
    font-size: 0.32rem;
    color: #888;
  }
  div.count-box {
    float: left;
    height: 100%;
  }
  p.count {
    width: 100%;
    height: 50%;
    font-size: 0.32rem;
    color: #444;
    text-align: center;
    line-height: 0.6rem;
  }
  p.count > span {
    color: #dc3b40;
  }
  p.info {
    width: 100%;
    height: 50%;
    font-size: 0.24rem;
    color: #888;
    text-align: center;
    line-height: 0.4rem;
  }
  .submit-btn {
    float: right;
    width: 1.67rem;
    height: 0.66rem;
    margin: 0.17rem 0.21rem 0 0;
    border-radius: 0.1rem;
    background-color: #dc3b40;
    font-size: 0.32rem;
    color: white;
    text-align: center;
    line-height: 0.66rem;
    border: none;
    outline: none;
  }
</style>
