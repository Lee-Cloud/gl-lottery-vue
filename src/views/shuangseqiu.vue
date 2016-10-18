<template>
  <div id="shuangseqiu">
    <deadlines></deadlines>
    <div class="ball-zone">
      <p class="prompt">至少选择5个红球，2个蓝球<span class="random-btn">机选</span></p>
      <ul class="balls red-balls">
        <li v-for="num in 33">{{num}}</li>
      </ul>
      <ul class="balls">
        <li v-for="num in 16" class="blue-ball">{{num}}</li>
      </ul>
    </div>
    <btns></btns>
  </div>
</template>

<script>
import deadlines from '../components/deadlines-results.vue';
import btns from '../components/btns-default';
export default {
  data () {
    return {}
  },
  created (){
    this.$emit('viewIn',"双色球");
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {
    deadlines,
    btns
  }
}
</script>

<style lang="less">
  #shuangseqiu {
    background-color: #eee;
  }
  div.ball-zone {
    width: 100%;
    padding: 0.26rem 0 1rem 0;
    >p.prompt {
      width:100%;
      height:0.48rem;
      padding:0 0.21rem;
      font-size:0.26rem;
      color:#888;
      line-height:0.48rem;
      >span.random-btn {
        position:relative;
        float:right;
        width:1.42rem;
        height:0.48rem;
        border:1px solid #ccc;
        border-radius:0.1rem;
        background-color:white;
        font-size:0.26rem;
        color:#888;
        line-height:0.48rem;
        padding-left:0.64rem;
        &::after {
          content:"";
          position:absolute;
          left:0.18rem;
          bottom:0.09rem;
          width:0.29rem;
          height:0.29rem;
          background-image:url('../assets/ico_bot.png');
          background-size:100% 100%;
        }
      }
    }
    >ul.balls {
      width:100%;
      padding:0.24rem 0.055rem 0.09rem 0.055rem;
      overflow:hidden;
      >li {
        float:left;
        width:0.7rem;
        height:0.7rem;
        margin:0 0.155rem 0.15rem 0.155rem;
        border:1px solid #ccc;
        border-radius:50%;
        background-color:white;
        font-size:0.28rem;
        text-align:center;
        line-height:0.7rem;
      }
      >li.blue-ball {
        color:#0c89e1;
      }
      >li.blue-ball.selected {
        color:white;
        background-color:#0c89e1;
      }
    }
    >ul.red-balls {
      position:relative;
      &::after {
        content:"";
        position:absolute;
        left:50%;
        bottom:0;
        width:6.8rem;
        height:1px;
        background-color:#ccc;
        transform:translate(-50%,0);
        -webkit-transform:translate(-50%,0);
      }
      >li {
        color:#e73334;
      }
      >li.selected {
        color:white;
        background-color:#e73334;
      }
    }
  }
</style>
