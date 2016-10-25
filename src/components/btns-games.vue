<template lang="html">
  <div id="btns-games">
    <span class="clear-btn" v-on:click="clear">清空</span>
    <p class="count">至少选择<span>9</span>场比赛</p>
    <input class="sure-btn" type="button" value="确定"  v-on:click="submit" v-bind:disabled="!canSubmit">
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props:['canSubmit'],
  computed: {},
  mounted () {},
  methods: {
    clear:function(){
      this.$emit('clear');
    },
    submit:function(){
      this.$emit('submit');
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
  #btns-games {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    border-top: 1px solid #ccc;
    background-color: white;
  }
  span.clear-btn {
    position: relative;
    float: left;
    width: 1.68rem;
    height: 1rem;
    padding-left: 0.83rem;
    color: #888;
    font-size: 0.32rem;
    line-height: 1rem;
  }
  span.clear-btn::before {
    content: "";
    position: absolute;
    left: 0.21rem;
    bottom: 0.26rem;
    width: 0.47rem;
    height: 0.47rem;
    background-image: url('../assets/ico_delete.png');
    background-size: 100% 100%;
  }
  span.clear-btn::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 0.6rem;
    background-color: #ccc;
    transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
  }
  p.count {
    float: left;
    height: 1rem;
    padding-left: 0.48rem;
    line-height: 1rem;
    color: #666;
    font-size: 0.32rem;
  }
  p.count > span {
    color: #dc3b40;
  }
  input.sure-btn {
    float: right;
    width: 1.67rem;
    height: 0.66rem;
    margin: 0.17rem 0.21rem;
    border-radius: 0.1rem;
    background-color: #dc3b40;
    color: white;
    font-size: 0.32rem;
    text-align: center;
    line-height: 0.66rem;
    border:none;
    outline: none;
  }
  input.sure-btn:disabled {
    background-color: #eee;
    color: #ccc
  }
</style>
