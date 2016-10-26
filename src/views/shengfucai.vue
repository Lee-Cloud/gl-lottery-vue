<template lang="html">
  <div id="sfc">
    <deadline></deadline>
    <ul class="games">
      <li class="game">
        <span class="index">10</span>
        <ul class="game-info">
          <li>比赛时间</li>
          <li>10-25</li>
          <li>17:00</li>
        </ul>
        <div class="game-item" v-bind:class="{ selected:isSelected}" v-on:click="select">
          <p class="team-name">利物浦</p>
          <p class="odds">主胜1.08</p>
        </div>
        <div class="game-item" v-bind:class="{ selected:isSelected}" v-on:click="select">
          <p class="team-name">VS</p>
          <p class="odds">平1.08</p>
        </div>
        <div class="game-item" v-bind:class="{ selected:isSelected}" v-on:click="select">
          <p class="team-name">热刺</p>
          <p class="odds">客胜1.08</p>
        </div>
      </li>
    </ul>
    <btns_games v-on:clear="clear" v-on:submit="submit" v-bind:canSubmit="canSubmit"></btns_games>
  </div>
</template>

<script>
import deadline from '../components/deadline.vue';
import btns_games from '../components/btns-games';
import router from '../router.js'
export default {
  data () {
    return {
      isSelected:false,
      canSubmit : true
    }
  },
  created(){
    this.$emit('viewIn',"胜负彩")
  },
  computed: {},
  mounted () {},
  methods: {
    clear:function(){},
    submit:function(){
      router.push('renxuanjiu/slip')
    },
    select:function(){
      this.isSelected = !this.isSelected;
    }
  },
  components: {
    deadline,
    btns_games
  }
}
</script>

<style lang="less" scoped>
  #sfc {
    background-color: #eee;
    padding-bottom: 1.1rem;
  }
  ul.games {
    width: 100%;
  }
  li.game {
    position: relative;
    width: 100%;
    height: 1.74rem;
    padding:0 0.21rem;
  }
  li.game::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0);
    -webkit-transform: translate(-50%,0);
    width: 6.78rem;
    height: 1px;
    background-color: #ccc;
  }
  ul.game-info {
    position: absolute;
    top: 50%;
    left: 0.58rem;
    transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
  }
  li.game > span.index {
    float: left;
    line-height: 100%;
    padding-top: 0.36rem;
    color: #444;
    font-size: 0.26rem;
  }
  ul.game-info > li {
    margin: 0.12rem 0;
    line-height: 100%;
    color: #444;
    font-size: 0.26rem;
    text-align: center;
  }
  div.game-item {
    float: right;
    width: 1.7rem;
    height: 0.94rem;
    margin: 0.4rem 0 0 0.06rem;
    border: 1px solid #ccc;
    background-color: white;
    padding:0.12rem 0;
    >p.team-name {
      height:50%;
      font-size:0.26rem;
      color:#444;
      text-align:center;
      line-height:0.35rem;
    }
    >p.odds {
      height:50%;
      font-size:0.2rem;
      color:#888;
      text-align:center;
      line-height:0.35rem;
    }
  }
  div.game-item.selected {
    background-color:#DC3B40;
    >p {
      color:white;
    }
  }
</style>
