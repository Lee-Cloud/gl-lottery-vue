<template lang="html">
  <div id="recommend_details">
    <div class="recommend-title">
      <img src="../assets/avstar.jpg" alt="头像" class="photo"/>
      <div class="title-text">
        <p class="title">专家评论</p>
        <p class="date">10-17 21:15</p>
      </div>
    </div>
    <p class="recommend-content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created (){
    this.$emit('viewIn',"推荐详情");
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>
<style lang="less" scoped>
  div.recommend-title {
    overflow: hidden;
    >img.photo {
      float: left;
      width: 0.9rem;
      height: 0.9rem;
      margin: 0.24rem 0.30rem 0.30rem 0.21rem;
      border-radius: 50%;
    }
    >div.title-text {
      float: left;
      margin-top: 0.45rem;
      >p.title{
        color: #dc3b40;
        font-size: 0.24rem;
        margin-bottom: 0.12rem;
        line-height: 100%;
      }
      >p.date {
        color: #ccc;
        font-size: 0.22rem;
        line-height: 100%;
      }
    }
  }
  p.recommend-content {
    padding: 0 0.21rem;
    font-size: 0.26rem;
    color: #666;
    text-indent: 0.52rem;
    text-align: justify;
  }
</style>
