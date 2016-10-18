<template lang="html">
  <div id="recommends">
    <div class="space"></div>
    <ul class="recommends">
      <li class="recommend">
        <router-link to='/recommends/details'>
          <img src="../assets/avstar.jpg" alt="头像" class="photo"/>
          <div class="recommend-review">
            <p class="review-title">专家评论</p>
            <p class="review-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <span class="date">10-17 20:57</span>
          </div>
        </router-link>
      </li>
      <li class="recommend">
        <router-link to='/recommends/details'>
          <img src="../assets/avstar.jpg" alt="头像" class="photo"/>
          <div class="recommend-review">
            <p class="review-title">专家评论</p>
            <p class="review-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src="" alt="" class="pic"/>
            <img src="" alt="" class="pic"/>
            <span class="date">10-17 20:57</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created (){
    this.$emit('viewIn',"专家推荐");
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="less" scoped>
  #recommends {
    background-color: #eee;
    >div.space {
      width: 100%;
      height: .12rem;
      background-color: #eee;
    }
    >ul.recommends {
      width: 100%;
      background-color: white;
      >li.recommend {
        width: 100%;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        >a{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
    img.photo {
      float: left;
      width: 0.9rem;
      height: 0.9rem;
      margin: 0.3rem 0.3rem 0 0.21rem;
      border-radius: 50%;
    }
    div.recommend-review {
      position: relative;
      float: left;
      width: 5.58rem;
      padding: 0.4rem 0 0.7rem 0;
      >p.review-title {
        font-size: 0.24rem;
        color: #dc3b40;
        line-height: 100%;
        margin-bottom: 0.16rem;
      }
      >p.review-content {
        font-size: 0.26rem;
        color: #666;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin-bottom: 0.16rem;
      }
      >img.pic {
        width: 0.9rem;
        height: 1.4rem;
      }
      >span.date {
        position: absolute;
        right: 0;
        bottom: 0.21rem;
        font-size: 0.22rem;
        color: #ccc;
      }
    }
  }
</style>
