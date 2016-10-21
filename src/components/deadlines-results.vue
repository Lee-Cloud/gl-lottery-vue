<template lang="html">
  <div id="deadline">
        <div class="time-info" v-on:click="toggle">{{time_info}}<i  v-bind:class="{'icon-down':isFold,'icon-up':isUnfold}"></i></div>
        <ul class="past-results" v-show="past_results_state">
            <li class="past-result" v-for="result in past_results">
                <span class="past-result-date">{{result.past_result_date}}</span>
                <ul class="past-result-nums">
                    <li v-for="num in result.past_result_nums" class="past-result-num">{{num}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
export default {
  data () {
    return {
      data:{},
      time_info:"第2016122期 09-30 10:27（周五）截止投注，22:00开奖",
      isFold:true,
      isUnfold:false,
      past_results_state:false,
      past_results:[{
                past_result_date:"第2016122期",
                past_result_nums:["02","06","08","10",15,18,"08"]
            },{
                past_result_date:"第2016122期",
                past_result_nums:["02","06","08","10",15,18,"08"]
            },{
                past_result_date:"第2016122期",
                past_result_nums:["02","06","08","10",15,18,"08"]
            },{
                past_result_date:"第2016122期",
                past_result_nums:["02","06","08","10",15,18,"08"]
            },{
                past_result_date:"第2016122期",
                past_result_nums:["02","06","08","10",15,18,"08"]
            },{
                past_result_date:"第2016122期",
                past_result_nums:["02","06","08","10",15,18,"08"]
            }]
    }
  },
  created(){
    this.$http.get('http://apis.baidu.com/apistore/lottery/lotteryquery?lotterycode=ssq&recordcnt=5',{
      headers:{
        apikey:'cf9eaf021a2acdaea3a658c3bc9088ff'
      }
    }).then(function(res){
      console.log(JSON.parse(res.data)),
      this.$set(this,'data',JSON.parse(res.data));
      console.log(this.data)
    },function(){

    })
  },
  computed: {},
  mounted () {},
  methods: {
    toggle:function(){
                this.isFold = !this.isFold;
                this.isUnfold = !this.isUnfold;
                this.past_results_state = !this.past_results_state;
            }
  },
  components: {}
}
</script>

<style lang="less">
#deadline{
width: 100%;
div.time-info{
  position: relative;
  width: 100%;
  height: 0.6rem;
  border-bottom: 1px solid #eee;
  padding: 0 0.22rem;
  background-color: white;
  font-size: 0.24rem;
  color: #666;
  line-height: 0.6rem;
  >i{
    position: absolute;
    top: 50%;
    right: 0.22rem;
    width: 0.28rem;
    height: 0.14rem;
    transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    background-size: 100% 100%;
  }
  >i.icon-down{
    background-image: url("../assets/ico_down.png");
  }
  >i.icon-up{
    background-image: url("../assets/ico_up.png");
  }
}
ul.past-results{
  width: 100%;
  >li.past-result{
    width: 100%;
    height: 0.46rem;
    padding: 0 0.21rem;
    font-size: 0.22rem;
    overflow: hidden;
    &:nth-child(odd){
      background-color: white;
    }
    &:nth-child(even){
      background-color: #f6f6f6;
    }
    >span.past-result-date{
      position: relative;
      float: left;
      height: 0.46rem;
      /*width: 1.28rem;*/
      padding-right: 0.28rem;
      color: #666;
      line-height: 0.46rem;
      text-align: center;
      &::after{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 0.1rem;
        height: 0.46rem;
        background-image: url("../assets/ico_dot.png");
        background-size: 100% 100%;
      }
    }
    >ul.past-result-nums{
      float: left;
      padding-left: 0.6rem;
      overflow: hidden;
      >li.past-result-num{
        float: left;
        height: 0.46rem;
        line-height: 0.46rem;
        margin-right: 0.1rem;
        color: #EF8585;
        &:nth-last-child(1),&:nth-last-child(2){
          color: #4CA1E7;
        }
      }
    }
  }
}
}
</style>
