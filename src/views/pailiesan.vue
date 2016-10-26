<template lang="html">
  <div id="pls">
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
    <btns v-bind:zhu="zhu" v-on:clear="init" v-bind:canSubmit="zhu" v-on:submit="submit"></btns>
  </div>
</template>

<script>
import deadline from '../components/deadline.vue';
import btns from '../components/btns-default.vue';
import router from '../router'
export default {
  data () {
    return {
      bai:[],
      shi:[],
      ge:[],
      bai_selected:[],
      shi_selected:[],
      ge_selected:[],
      zhu:0
    }
  },
  created(){
    this.$emit('viewIn',"排列三");
    this.init();
  },
  computed: {
    check:function(){
      this.$set(this,'zhu',this.bai_selected.length*this.shi_selected.length*this.ge_selected.length);
    }
  },
  mounted () {},
  methods: {
    init:function(){
      var bai = [],shi = [],ge =[];
      for(var i = 0;i<10;i++){
        bai.push({num:i,isSelected:false});
        shi.push({num:i,isSelected:false});
        ge.push({num:i,isSelected:false});
      }
      this.$set(this,'bai',bai);
      this.$set(this,'shi',shi);
      this.$set(this,'ge',ge);
      this.bai_selected.splice(0,this.bai_selected.length);
      this.shi_selected.splice(0,this.shi_selected.length);
      this.ge_selected.splice(0,this.ge_selected.length);
      this.check;
    },
    random:function(){
      this.init();
      var bai = parseInt(Math.random()*10);
      // this.bai[bai].isSelected = true;
      this.bai_select(this.bai[bai]);
      var shi = parseInt(Math.random()*10);
      // this.shi[shi].isSelected = true;
      this.shi_select(this.shi[shi]);
      var ge = parseInt(Math.random()*10);
      // this.ge[ge].isSelected = true;
      this.ge_select(this.ge[ge]);
      this.check;
    },
    bai_select:function(item){
      item.isSelected = !item.isSelected;
      if(item.isSelected){
        this.bai_selected.push(item.num);
      }else{
        for(var i=0;i<this.bai_selected.length;i++){
          (this.bai_selected[i]==item.num)&&(this.bai_selected.splice(i,1));
        }
      }
      this.check;
    },
    shi_select:function(item){
      item.isSelected = !item.isSelected;
      if(item.isSelected){
        this.shi_selected.push(item.num);
      }else{
        for(var i=0;i<this.shi_selected.length;i++){
          (this.shi_selected[i]==item.num)&&(this.shi_selected.splice(i,1));
        }
      }
      this.check;
    },
    ge_select:function(item){
      item.isSelected = !item.isSelected;
      if(item.isSelected){
        this.ge_selected.push(item.num);
      }else{
        for(var i=0;i<this.ge_selected.length;i++){
          (this.ge_selected[i]==item.num)&&(this.ge_selected.splice(i,1));
        }
      }
      this.check;
    },
    submit:function(){
      console.log(this.bai_selected,this.shi_selected,this.ge_selected)
    },
  },
  components: {
    deadline,
    btns
  }
}
</script>

<style lang="less" scoped>
  #pls {
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
