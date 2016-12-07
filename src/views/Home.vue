<template>
  <div id = "home">
    <div class="banner">

    </div>
    <nav>
      <router-link to="/results" class="nav-item">
        <img src="../assets/ico_kaijiangjieguo.png" alt="开奖结果" />
        <p>开奖结果</p>
      </router-link>
      <router-link to="/information" class="nav-item">
        <img src="../assets/ico_zixun.png" alt="购彩资讯" />
        <p>购彩资讯</p>
      </router-link>
      <router-link to="/stations" class="nav-item">
        <img src="../assets/ico_zhandian.png" alt="附近站点" />
        <p>附近站点</p>
      </router-link>
      <router-link to="/recommends" class="nav-item">
        <img src="../assets/ico_tuijian.png" alt="专家推荐" />
        <p>专家推荐</p>
      </router-link>
    </nav>
    <div class="lotterys-title">热门彩种</div>
    <ul class="lotterys">
      <li class="lottery">
        <router-link to="" class="lottery-link">
          <img src="../assets/ico_jingcaizuqiu.png" alt="竞彩足球" />
          <div class="lottery-info">
            <p class="lottery-name">竞彩足球</p>
            <p class="lottery-desription">彩种描述</p>
          </div>
        </router-link>
      </li>
      <li class="lottery">
        <router-link to="/shuangseqiu" class="lottery-link">
          <img src="../assets/ico_shuangseqiu.png" alt="双色球" />
          <div class="lottery-info">
            <p class="lottery-name">双色球</p>
            <p class="lottery-desription">彩种描述</p>
          </div>
        </router-link>
      </li>
      <li class="lottery">
        <router-link to="/daletou" class="lottery-link">
          <img src="../assets/ico_daletou.png" alt="大乐透" />
          <div class="lottery-info">
            <p class="lottery-name">大乐透</p>
            <p class="lottery-desription">彩种描述</p>
          </div>
        </router-link>
      </li>
      <li class="lottery">
        <router-link to="/jclq" class="lottery-link">
          <img src="../assets/ico_jingcailanqiu.png" alt="竞彩篮球" />
          <div class="lottery-info">
            <p class="lottery-name">竞彩篮球</p>
            <p class="lottery-desription">彩种描述</p>
          </div>
        </router-link>
      </li>
      <li class="lottery">
        <router-link to="/renxuanjiu" class="lottery-link">
          <img src="../assets/ico_renxuanjiu.png" alt="任选九" />
          <div class="lottery-info">
            <p class="lottery-name">任选九</p>
            <p class="lottery-desription">彩种描述</p>
          </div>
        </router-link>
      </li>
      <li class="lottery">
        <router-link to="/pailiesan" class="lottery-link">
          <img src="../assets/ico_pailiesan.png" alt="排列三" />
          <div class="lottery-info">
            <p class="lottery-name">排列三</p>
            <p class="lottery-desription">彩种描述</p>
          </div>
        </router-link>
      </li>
      <li class="lottery">
        <router-link to="/fc3d" class="lottery-link">
          <img src="../assets/ico_3D.png" alt="福彩3D" />
          <div class="lottery-info">
            <p class="lottery-name">福彩3D</p>
            <p class="lottery-desription">彩种描述</p>
          </div>
        </router-link>
      </li>
      <li class="lottery">
        <router-link to="/shengfucai" class="lottery-link">
          <img src="../assets/ico_shengfucai.png" alt="胜负彩" />
          <div class="lottery-info">
            <p class="lottery-name">胜负彩</p>
            <p class="lottery-desription">彩种描述</p>
          </div>
        </router-link>
      </li>
      <li class="lottery">
        <router-link to="" class="lottery-link">
          <img src="../assets/ico_zuqiudanguan.png" alt="竞足单关" />
          <div class="lottery-info">
            <p class="lottery-name">竞足单关</p>
            <p class="lottery-desription">彩种描述</p>
          </div>
        </router-link>
      </li>
      <li class="lottery">
        <router-link to="/lotteries" class="lottery-link">
          <img src="../assets/ico_more.png" alt="更多彩种" />
          <div class="lottery-info">
            <p class="lottery-name">更多彩种</p>
            <p class="lottery-desription">更多彩种</p>
          </div>
        </router-link>
      </li>

    </ul>
  </div>
</template>
<script>
  export default {
    date(){
      return {
        title: "咕啦彩票"
      }
    },
    created (){
      this.$emit('viewIn',"咕啦彩票");
    },
    methods: {

    },
  }
</script>
<style scoped>
  div.banner{
    width: 7.2rem;
    height: 3.6rem;
    background-image: url('../assets/1122.jpg');
    background-size: 100% 100%;
  }
  nav{
    width: 100%;
    height: 1.75rem;
    box-sizing: content-box;
    border-bottom: 0.15rem solid #eee;
  }
  nav > .nav-item {
    position: relative;
    float: left;
    width: 25%;
    height: 100%;
    color: #444;
    font-size: 0.26rem;
    text-align: center;
    line-height: 100%;
    text-decoration: none;
  }
  nav > .nav-item > img {
    width: 0.88rem;
    height: 0.88rem;
    margin: .24rem .46rem .15rem .46rem;
  }
  div.lotterys-title {
    position: relative;
    width: 100%;
    height: 0.6rem;
    padding-left: 0.45rem;
    font-size: 0.28rem;
    color: #444;
    line-height: 0.6rem;
  }
  div.lotterys-title::before {
    content: "";
    position: absolute;
    top: 0.12rem;
    left: 0.21rem;
    width: 0.06rem;
    height: 0.36rem;
    background-color: #DE484C;
  }
  ul.lotterys {
    width: 100%;
    overflow: hidden;
  }
  ul.lotterys > li.lottery {
    position: relative;
    float: left;
    width: 50%;
    height: 1.5rem;
    border-top: 1px solid #eee;
  }
  li.lottery:nth-child(2n-1)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    width: 1px;
    height: 0.6rem;
    background-color: #eee;
  }
  .lottery-link {
    display: block;
    width: 100%;
    height: 100%;
  }
  .lottery-link > img {
    width: 1.08rem;
    height: 1.08rem;
    margin: 0.21rem 0.09rem 0.21rem 0.33rem;
  }
  .lottery-info {
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
  }
  .lottery-name {
    color: #666;
    font-size: 0.28rem;
    line-height: 100%;
    margin-bottom: 0.15rem;
  }
  .lottery-desription {
    color: #888;
    font-size: 0.22rem;
    line-height: 100%;
  }
</style>
