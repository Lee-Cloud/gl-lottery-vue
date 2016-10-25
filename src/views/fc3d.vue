<template lang="html">
  <div id="fc3d">
    <deadline></deadline>
    <p class="prompt">每位至少选择1个号码<span class="random-btn" v-on:click="random">机选</span></p>
    <div class="wei bai">
      <ul>
        <li v-for="item in bai" v-bind:class="{selected:item.isSelected}" v-on:click="bai_select(item)">{{item.num}}</li>
      </ul>
    </div>
    <div class="wei shi">
      <ul>
        <li v-for="item in shi" v-bind:class="{selected:item.isSelected}" v-on:click="shi_select(item)">{{item.num}}</li>
      </ul>
    </div>
    <div class="wei ge">
      <ul>
        <li v-for="item in ge" v-bind:class="{selected:item.isSelected}" v-on:click="ge_select(item)">{{item.num}}</li>
      </ul>
    </div>
    <btns v-bind:zhu="zhu"></btns>
  </div>
</template>

<script>
import deadline from '../components/deadline.vue';
import btns from '../components/btns-default.vue';
export default {
  data () {
    return {
      bai:[],
      shi:[],
      ge:[],
      zhu:0
    }
  },
  created(){
    this.$emit('viewIn',"福彩3D");
    this.init();
  },
  computed: {},
  mounted () {},
  methods: {
    init:function(){
      for(var i = 0;i<10;i++){
        this.bai.push({num:i,isSelected:false});
        this.shi.push({num:i,isSelected:false});
        this.ge.push({num:i,isSelected:false});
      }
    },
    random:function(){
      var bai = parseInt(Math.random()*10);
      this.bai[bai].isSelected = true;
      var shi = parseInt(Math.random()*10);
      this.shi[shi].isSelected = true;
      var ge = parseInt(Math.random()*10);
      this.ge[ge].isSelected = true;
    },
    bai_select:function(item){
      item.isSelected = !item.isSelected;
    },
    shi_select:function(){
      item.isSelected = !item.isSelected;
    },
    ge_select:function(){
      item.isSelected = !item.isSelected;
    }
  },
  components: {
    deadline,
    btns
  }
}
</script>

<style lang="less" scoped>
  #fc3d {
    background-color: #eee;
    padding-bottom: 1rem;
  }
  p.prompt {
    width:100%;
    height:0.48rem;
    margin-top:0.27rem;
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
  div.wei {
    position:relative;
    width:100%;
    height:2.3rem;
    padding:0 0.21rem;
    &::after {
      position:absolute;
      top:0.3rem;
      left:0.21rem;
      width:1.11rem;
      height:0.56rem;
      border-radius:0.28rem;
      background-color:#DADADA;
      font-size:0.32rem;
      color:#666;
      text-align:center;
      line-height:0.56rem;
    }
    &::before {
      content:"";
      position:absolute;
      left:50%;
      bottom:0;
      width:6.78rem;
      height:1px;
      transform:translate(-50%,0);
      -webkit-transform:translate(-50%,0);
      background-color:#ccc;
    }
    >ul {
      float:right;
      width:5.45rem;
      >li {
        float:left;
        width:0.7rem;
        height:0.7rem;
        margin:0.3rem 0 0 0.39rem;
        border-radius:50%;
        border:1px solid #ccc;
        background-color:white;
        color:#e73334;
        font-size:0.28rem;
        text-align:center;
        line-height:0.7rem;
      }
      >li.selected {
        background-color:#e73334;
        color:white;
      }
    }
  }
  div.bai::after {
    content:"百位";
  }
  div.shi::after {
    content:"十位";
  }
  div.ge::after {
    content:"个位";
  }
</style>
