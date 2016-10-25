<template>
  <div id="daletou">
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
    <btns v-on:clear="init" v-on:submit="submit" v-bind:canSubmit="canSubmit" v-bind:zhu="zhu"></btns>
  </div>
</template>

<script>
import router from '../router.js';
import deadlines from '../components/deadlines-results.vue';
import btns from '../components/btns-default';
import store from '../vuex/store.js';
export default {
  data () {
    return {
      reds:[],
      blues:[],
      reds_selected:[],
      blues_selected:[],
      dlt:[],
      zhu:0,
      canSubmit:false
    }
  },
  created (){
    this.$emit('viewIn',"大乐透");
    this.init();//34个红球，16个蓝球初始化
  },
  computed: {
    check:function(){
      if((this.reds_selected.length==5)&&(this.blues_selected.length==2)){
        this.reds_selected.sort(function(a,b){return a-b});
        this.blues_selected.sort(function(a,b){return a-b});
        this.$set(this,'dlt',this.reds_selected.concat(this.blues_selected));
        this.$set(this,'canSubmit',true);
        this.zhu = 1;
      }else{
        this.canSubmit = false;
        this.zhu = 0;
      }
    }
  },
  mounted () {},
  methods: {
    init:function(){
      var reds = [];
      var blues = [];
      for(var i=1;i<36;i++){
        (i<10)&&(i='0'+i);
        reds.push({num:i,isSelected:false});
      }
      for(var j=1;j<13;j++){
        (j<10)&&(j='0'+j);
        blues.push({num:j,isSelected:false});
      }
      this.$set(this,'reds',reds);
      this.$set(this,'blues',blues);
      this.reds_selected.length = 0;
      this.blues_selected.length = 0;
      this.canSubmit = false;
      this.zhu = 0;
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
      this.check;
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
      this.check;
      // console.log(this.blues_selected);
    },
    random:function(){
      this.init();
      while(this.reds_selected.length<5){
        var i = parseInt(Math.random()*35);
        this.red_select(this.reds[i]);
      }
      while(this.blues_selected.length<2){
        var j = parseInt(Math.random()*12);
        this.blue_select(this.blues[j]);
      }
    },
    submit:function(){
      // console.log(this.ssq);
      store.commit('dlt_add',this.dlt)
      console.log(store.state.dlt.ticket);
      router.push('daletou/slip');
    }
  },
  components: {
    deadlines,
    btns
  }
}
</script>

<style lang="css">
#daletou {
  background-color: #eee;
}
</style>
