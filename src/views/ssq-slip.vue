<template lang="html">
  <div id="ssq-slip">
    <slip_ctrl></slip_ctrl>
    <div class="ticket">
      <ticket_header></ticket_header>
      <ul class="ticket-content">
        <li>
          <i class="icon-delete"></i>
          <span class="ssq">01</span>
          <span class="ssq">01</span>
          <span class="ssq">01</span>
          <span class="ssq">01</span>
          <span class="ssq">01</span>
          <span class="ssq">01</span>
          <span class="ssq">01</span>
        </li>
      </ul>
      <ticket_footer></ticket_footer>
    </div>
    <submit></submit>
  </div>
</template>

<script>
import slip_ctrl from '../components/slip-ctrl.vue';
import submit from '../components/qbj-submit.vue';
import ticket_header from '../components/ticket-header';
import ticket_footer from '../components/ticket-footer';
export default {
  data () {
    return {}
  },
  created(){
    this.$emit('viewIn',"投注单");
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {
    slip_ctrl,
    ticket_header,
    ticket_footer,
    submit
  }
}
</script>

<style lang="css">
  #ssq-slip {
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
  ul.ticket-content > li > span.ssq {
    float: left;
    height: 0.99rem;
    line-height: 0.99rem;
    font-size: 0.28rem;
    color: #dc3b40;
    margin-right: 0.3rem;
  }
  ul.ticket-content > li > span.ssq:nth-child(7),
  ul.ticket-content > li > span.ssq:nth-child(8) {
    color: #0C89E1
  }
</style>
