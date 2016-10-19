<template>
  <div id="shuangseqiu">
    <deadlines></deadlines>
    <div class="ball-zone">
      <p class="prompt">至少选择5个红球，2个蓝球<span class="random-btn" v-on:click="random">机选</span></p>
      <ul class="balls red-balls">
        <li v-for="(item,index) in reds" v-on:click="red_select(item,index)" v-bind:class="{selected:item.isSelected}">{{item.num}}</li>
      </ul>
      <ul class="balls">
        <li v-for="(item,index) in blues" class="blue-ball" v-on:click="blue_select(item)" v-bind:class="{selected:item.isSelected}">{{item.num}}</li>
      </ul>
    </div>
    <btns v-on:clear="init" v-on:submit="submit"></btns>
  </div>
</template>

<script>
import deadlines from '../components/deadlines-results.vue';
import btns from '../components/btns-default';
export default {
  data () {
    return {
      reds:[],
      blues:[],
      reds_selected:[],
      blues_selected:[]
    }
  },
  created (){
    this.$emit('viewIn',"双色球");
    this.init();
  },
  computed: {},
  mounted () {},
  methods: {
    init:function(){
      var reds = [];
      var blues = [];
      for(var i=1;i<35;i++){
        (i<10)&&(i='0'+i);
        reds.push({num:i,isSelected:false});
      }
      for(var j=1;j<17;j++){
        (j<10)&&(j='0'+j);
        blues.push({num:j,isSelected:false});
      }
      this.$set(this,'reds',reds);
      this.$set(this,'blues',blues);
      this.reds_selected.length = 0;
      this.blues_selected.length = 0;
    },
    red_select:function(item,index){
      item.isSelected = !item.isSelected;
      if(item.isSelected){
        (this.reds_selected.length<5)?this.reds_selected.push(item.num):(item.isSelected = !item.isSelected);
      }else{
        for(var i=0;i<this.reds_selected.length;i++){
          (this.reds_selected[i]==item.num)&&(this.reds_selected.splice(i,1));
        }
      }
      // console.log(this.reds_selected);
    },
    blue_select:function(item){
      item.isSelected = !item.isSelected;
      if(item.isSelected){
        (this.blues_selected.length<2)?this.blues_selected.push(item.num):(item.isSelected = !item.isSelected);
      }else{
        for(var i=0;i<this.blues_selected.length;i++){
          (this.blues_selected[i]==item.num)&&(this.blues_selected.splice(i,1));
        }
      }
      // console.log(this.blues_selected);
    },
    random:function(){
      this.init();
      while(this.reds_selected.length<5){
        var i = parseInt(Math.random()*34);
        this.red_select(this.reds[i]);
      }
      while(this.blues_selected.length<2){
        var j = parseInt(Math.random()*16);
        this.blue_select(this.blues[j]);
      }
    },
    submit:function(){
      this.reds_selected.sort(function(a,b){return a-b});
      this.blues_selected.sort(function(a,b){return a-b});
      console.log(this.reds_selected.concat(this.blues_selected));
    }
  },
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
