<template lang="html">
  <div id="jczq">
    <div class="no-data">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created(){
    this.$emit('viewIn',"竞彩篮球");
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
  #jczq {
    background-color: #eee;
  }
  .no-data {
    position: absolute;
    top: 40%;
    left: 50%;
    transform:translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
    width: 1.94rem;
    height: 1.94rem;
    background-image: url('../assets/ico_indate.png');
    background-size: 100% 100%;
  }
  .no-data::after {
    content: "暂无数据";
    position: absolute;
    left: 50%;
    top: 2.18rem;
    transform: translate(-50%,0);
    -webkit-transform: translate(-50%,0);
    font-size: 0.32rem;
    color: #ccc;
    line-height: 100%;
    white-space: nowrap;
  }
</style>
