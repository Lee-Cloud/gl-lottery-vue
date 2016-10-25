<template lang="html">
  <div id="dlt-slip">
    <slip_ctrl v-on:select="select" v-on:random="random" v-on:clear="clear"></slip_ctrl>
    <div class="ticket">
      <ticket_header></ticket_header>
      <ul class="ticket-content">
        <li v-for="(nums,index) in ticket">
          <i class="icon-delete" v-on:click="delete_this(index)"></i>
          <span class="ssq_num" v-for="num in nums">{{num}}</span>
        </li>
      </ul>
      <ticket_footer></ticket_footer>
    </div>
    <submit v-bind:zhu="zhu"></submit>
  </div>
</template>

<script>
import slip_ctrl from '../components/slip-ctrl.vue';
import submit from '../components/qbj-submit.vue';
import ticket_header from '../components/ticket-header';
import ticket_footer from '../components/ticket-footer';
import store from '../vuex/store.js';
import router from '../router.js';
export default {
  data () {
    return {
      ticket:store.state.dlt.ticket,
      zhu:store.state.dlt.ticket.length
    }
  },
  created(){
    this.$emit('viewIn',"大乐透投注单");
  },
  computed: {},
  mounted () {},
  methods: {
    select:function(){
      router.go(-1);
    },
    random:function(){
      var reds = [];
      var blues = [];
      for(var i=1;i<36;i++){
        if(i<10){
          reds[i]='0'+i;
        }else{
          reds[i]=i;
        }
      }
      for(var j=1;j<13;j++){
        if(j<10){
          blues[j]='0'+j;
        }else{
          blues[j]=j;
        }
      }
      reds.sort(function(){
        return 0.5-Math.random()
      })
      blues.sort(function(){
        return 0.5-Math.random()
      })
      var num =reds.slice(0,5).sort(function(a,b){return a-b}).concat(blues.slice(0,2).sort(function(a,b){return a-b}));
      // console.log(num);
      store.commit('dlt_add',num);
      this.$set(this,'zhu',store.state.dlt.ticket.length)
    },
    clear:function(){
      store.commit('dlt_clear');
      this.$set(this,'zhu',store.state.dlt.ticket.length)
      // console.log(this.ticket);
    },
    delete_this:function(index){
      store.state.dlt.ticket.splice(index,1);
      this.$set(this,'zhu',store.state.dlt.ticket.length)
    }
  },
  components: {
    slip_ctrl,
    ticket_header,
    ticket_footer,
    submit
  }
}
</script>

<style lang="css" scoped>
  #dlt-slip {
    background-color: #eee;
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
    height: 0.99rem;
    padding: 0 0.3rem;
    background-image: url('../assets/ticket_02.png');
    background-size: 100% 100%;
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
  ul.ticket-content > li::after {
    content: "";
    position: absolute;
    top: 0.34rem;
    right: 0.7rem;
    width: 0.15rem;
    height: 0.25rem;
    background-image: url('../assets/ico_into1.png');
    background-size: 100% 100%;
  }
  ul.ticket-content > li > i.icon-delete {
    float: left;
    width: 0.29rem;
    height: 0.29rem;
    margin: 0.35rem 0.12rem 0.35rem 0.49rem;
    background-image: url('../assets/ico_delete2.png');
    background-size: 100% 100%;
  }
  ul.ticket-content > li > span.ssq_num {
    float: left;
    width: 0.4rem;
    height: 0.99rem;
    line-height: 0.99rem;
    font-size: 0.28rem;
    color: #dc3b40;
    margin-right: 0.3rem;
  }
  ul.ticket-content > li > span.ssq_num:nth-child(7),
  ul.ticket-content > li > span.ssq_num:nth-child(8) {
    color: #0C89E1
  }
</style>
