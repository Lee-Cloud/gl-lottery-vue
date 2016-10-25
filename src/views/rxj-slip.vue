<template lang="html">
  <div id="rxj-slip">
    <p class="slip-info">
      共选择1场比赛，截止投注日期：2016-10-25 20:00
    </p>
    <div class="ticket">
      <ticket_header></ticket_header>
      <ul class="ticket-content">
        <li>
          <p class="game-team">
            <span class="team1">巴萨</span>
            <span class="vs">VS</span>
            <span class="team2">皇马</span>
          </p>
          <p class="game-result">主胜 2.07</p>
        </li>
        <li>
          <p class="game-team">
            <span class="team1">巴萨</span>
            <span class="vs">VS</span>
            <span class="team2">皇马</span>
          </p>
          <p class="game-result">主胜 2.07</p>
        </li>
      </ul>
      <ticket_footer></ticket_footer>
      <submit></submit>
    </div>
  </div>
</template>

<script>
import ticket_header from '../components/ticket-header';
import ticket_footer from '../components/ticket-footer';
import submit from '../components/bei-submit.vue';
export default {
  data () {
    return {}
  },
  created(){
    this.$emit('viewIn',"任选九投注单");
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {
    ticket_header,
    ticket_footer,
    submit
  }
}
</script>

<style lang="css" scoped>
  #rxj-slip {
    background-color:#eee;
  }
  p.slip-info {
    margin: 0.3rem 0 0.2rem 0;
    color: #888;
    font-size: 0.26rem;
    text-align: center;
    line-height: 100%;
  }
  div.ticket {
    width: 7.2rem;
    padding-bottom: 1.9rem;
  }
  ul.ticket-content {
    width: 6.87rem;
    margin: 0 auto;
  }
  ul.ticket-content > li {
    position: relative;
    width: 100%;
    /*height: 0.99rem;*/
    padding: 0 0.3rem;
    background-image: url('../assets/ticket_02.png');
    background-size: 100% 100%;
    overflow: hidden;
  }
  ul.ticket-content > li::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 80%;
    height:0;
    transform:translate(-50%,0);
    -webkit-transform:translate(-50%,0);
    border-bottom: 1px dotted #ccc;
  }
  p.game-team{
    width: 100%;
    margin: 0.06rem 0;
    font-size: 0.26rem;
    color: #444;
    /*line-height: 100%;*/
    overflow: hidden;
  }
  p.game-team > span.team1 {
    float: left;
    width: 40%;
    height: 100%;
    text-align: right;
  }
  p.game-team > span.vs {
    float: left;
    width: 20%;
    height: 100%;
    text-align: center;
  }
  p.game-team > span.team2 {
    float: left;
    width: 40%;
    height: 100%;
    text-align: left;
  }
  p.game-result {
    width: 100%;
    height: 0.53rem;
    text-align: center;
    font-size: 0.24rem;
    color: #DC3B40;
    line-height: 0.53rem;
  }
</style>
