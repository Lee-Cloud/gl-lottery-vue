<template lang="html">
  <div id="lotteries">
    <ul class="lotteries">
      <li>
        <router-link to="/daletou">
          <img src="../assets/ico_daletou.png" alt="大乐透" />
        </router-link>
      </li>
      <li>
        <router-link to="/shuangseqiu">
          <img src="../assets/ico_shuangseqiu.png" alt="双色球" />
        </router-link>
      </li>
      <li>
        <router-link to="/fc3d">
          <img src="../assets/ico_3D.png" alt="福彩3D" />
        </router-link>
      </li>
      <li>
        <router-link to="/jczq">
          <img src="../assets/ico_jingcaizuqiu.png" alt="竞彩足球" />
        </router-link>
      </li>
      <li>
        <router-link to="/jclq">
          <img src="../assets/ico_jingcailanqiu.png" alt="竞彩篮球" />
        </router-link>
      </li>
      <li>
        <router-link to="/jzdg">
          <img src="../assets/ico_zuqiudanguan.png" alt="竞足单关" />
        </router-link>
      </li>
      <li>
        <router-link to="/jldg">
          <img src="../assets/ico_lanqiudanguan.png" alt="竞篮单关" />
        </router-link>
      </li>
      <li>
        <router-link to="/pailiesan">
          <img src="../assets/ico_pailiesan.png" alt="排列三" />
        </router-link>
      </li>
      <li>
        <router-link to="/pailiewu">
          <img src="../assets/ico_pailiewu.png" alt="排列五" />
        </router-link>
      </li>
      <li>
        <router-link to="/renxuanjiu">
          <img src="../assets/ico_renxuanjiu.png" alt="任选九" />
        </router-link>
      </li>
      <li>
        <router-link to="/shengfucai">
          <img src="../assets/ico_shengfucai.png" alt="胜负彩" />
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
  created(){
    this.$emit('viewIn',"全部彩种");
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
  #lotteries {
    width: 100%;
  }
  ul.lotteries {
    width: 100%;
    padding: 0 0.24rem;
    overflow: hidden;
  }
  ul.lotteries > li {
    float: left;
    width: 1.08rem;
    height: 1.08rem;
    margin: 0.32rem 0.3rem 0.44rem 0.3rem;
  }
  ul.lotteries > li > a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  ul.lotteries > li > a::after {
    position: absolute;
    bottom: -0.4rem;
    left: 50%;
    transform: translate(-50%,0);
    -webkit-transform: translate(-50%,0);
    width: 100%;
    color: #444;
    font-size: 0.28rem;
    text-align: center;
    white-space: nowrap;
  }
  img {
    width: 100%;
    height: 100%;
  }
  ul.lotteries > li > a[href="/daletou"]::after {
    content: "大乐透"
  }
  ul.lotteries > li > a[href="/shuangseqiu"]::after {
    content: "双色球"
  }
  ul.lotteries > li > a[href="/fc3d"]::after {
    content: "福彩3D"
  }
  ul.lotteries > li > a[href="/jczq"]::after {
    content: "竞彩足球"
  }
  ul.lotteries > li > a[href="/jclq"]::after {
    content: "竞彩篮球"
  }
  ul.lotteries > li > a[href="/jzdg"]::after {
    content: "竞足单关"
  }
  ul.lotteries > li > a[href="/jldg"]::after {
    content: "竞篮单关"
  }
  ul.lotteries > li > a[href="/pailiesan"]::after {
    content: "排列三"
  }
  ul.lotteries > li > a[href="/pailiewu"]::after {
    content: "排列五"
  }
  ul.lotteries > li > a[href="/renxuanjiu"]::after {
    content: "任选九"
  }
  ul.lotteries > li > a[href="/shengfucai"]::after {
    content: "胜负彩"
  }
</style>
