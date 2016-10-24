<template lang="html">
  <ul id="qbj-submit">
    <li class="btns">
      <div>
        <ul class="qi">
          <li class="reduce" v-on:click="qi_reduce"></li>
          <li class="num">{{qi}}</li>
          <li class="add" v-on:click="qi_add"></li>
        </ul>
      </div>
      <div>
        <ul class="bei">
          <li class="reduce" v-on:click="bei_reduce"></li>
          <li  class="num">{{bei}}</li>
          <li class="add" v-on:click="bei_add"></li>
        </ul>
      </div>
    </li>
    <li class="submit">
      <div><label for="zhui"><input type="checkbox" name="zhui" id="zhui" v-model="zhui">追加投注</label></div>
      <div>
        <p class="count"><span>{{2*zhu*qi*bei}}</span> 元</p>
        <p class="info">{{zhu}}注 {{qi}}期 {{bei}}倍</p>
      </div>
      <div><input type="button" value="投注" class="submit-btn"></div>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      qi : 1,
      bei : 1,
      zhui:0
    }
  },
  props:['zhu'],
  computed: {},
  mounted () {},
  methods: {
    qi_reduce:function(){this.qi>1&&this.qi--},
    qi_add:function(){this.qi++},
    bei_reduce:function(){this.bei>1&&this.bei--},
    bei_add:function(){this.bei++}
  },
  components: {}
}
</script>
<style lang="css" scoped>
  #qbj-submit {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 7.2rem;
    background-color: white;
  }
  #qbj-submit > li.btns {
    width: 7.2rem;
    height: 0.83rem;
    border-top: 1px solid #ccc;
  }
  #qbj-submit > li.submit {
    width: 7.2rem;
    height: 1rem;
    border-top: 1px solid #eee;
    overflow: hidden;
  }
  #qbj-submit > li.submit > div {
    float: left;
    width: 33.3333%;
    height: 100%;
  }
  label[for="zhui"] {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 0.28rem;
    color: #888;
    line-height: 1rem;
  }
  #zhui {
    width: 0.3rem;
    height: 0.3rem;
    margin: 0 0.06rem 0 0.3rem;
    vertical-align: middle;
    -webkit-appearance:checkbox;
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
    width: 1.67rem;
    height: 0.66rem;
    margin: 0.17rem 0 0 0.43rem;
    border-radius: 0.1rem;
    background-color: #dc3b40;
    font-size: 0.32rem;
    color: white;
    text-align: center;
    line-height: 0.66rem;
    border: none;
    outline: none;
  }
  li.btns > div {
    float: left;
    width: 50%;
    height: 100%;
  }
  li.btns ul {
    box-sizing: content-box;
    position: relative;
    width: 2rem;
    height: 0.51rem;
    margin: 0.16rem auto;
    border-radius: 0.1rem;
  }
  li.btns ul > li {
    float: left;
    width: 33.3333%;
    height: 100%;
    font-size: 0.28rem;
    color: #888;
    line-height: 0.51rem;
    text-align: center;
  }
  li.btns ul > li.reduce {
    background-image: url('../assets/button_reduce.png');
    background-size: 100% 100%;
  }
  li.btns ul > li.add {
    background-image: url('../assets/button_add.png');
    background-size: 100% 100%;
  }
  li.btns ul > li.num {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  ul.qi::before {
    content: "追";
    position: absolute;
    top: 0;
    left: -0.4rem;
    height: 0.51rem;
    line-height: 0.51rem;
    font-size: 0.32rem;
    color: #888;
  }
  ul.qi::after {
    content: "期";
    position: absolute;
    top: 0;
    right: -0.4rem;
    height: 0.51rem;
    line-height: 0.51rem;
    font-size: 0.32rem;
    color: #888;
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
</style>
