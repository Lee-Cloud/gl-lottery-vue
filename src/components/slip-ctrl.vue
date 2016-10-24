<template lang="html">
  <ul id="slip-ctrl">
    <li class="btn add" v-on:click="select">自选号码</li>
    <li class="btn random" v-on:click="random">机选一注</li>
    <li class="btn clear" v-on:click="clear">全部清空</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {
    select:function(){
      this.$emit('select')
    },
    random:function(){
      this.$emit('random')
    },
    clear:function(){
      this.$emit('clear')
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
  #slip-ctrl {
    width: 7.2rem;
    height: 1.23rem;
    padding: 0.3rem 0 0.3rem 0.03rem;
    overflow: hidden;
  }
  li.btn {
    position: relative;
    float: left;
    width: 2.06rem;
    height: 0.63rem;
    margin:0 0.16rem;
    padding-right: 0.28rem;
    border: 1px solid #ccc;
    border-radius: 0.1rem;
    background-color: white;
    font-size: 0.28rem;
    color: #888;
    line-height: 0.63rem;
    text-align: right;
  }
  li.btn::before {
    content:"";
    position: absolute;
    top: 0.185rem;
    left: 0.28rem;
    width: 0.26rem;
    height: 0.26rem;
    background-size: 100% 100%;
  }
  li.add::before,li.random::before {
    background-image: url('../assets/ico_add.png');
  }
  li.clear::before {
    background-image: url('../assets/ico_delete1.png');
  }
</style>
