<template>
  <div id="stations">
    <ul class="stations-list">
      <li class="station" v-for="station in stations">
        <router-link to="/stations/station_detail">
          <span class="station-type" v-bind:class="[station.class]">{{station.type}}</span>
          <div class="station-info">
            <p class="station-name">
              {{station.name}}
            </p>
            <p class="station-location">
              {{station.location}}
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    data(){
      return {
        stations:[
          {type:"体彩店",name:"好好学习彩票站",location:"河北省石家庄市",class:"ticai"},
          {type:"福彩店",name:"天天向上福票站",location:"河北省石家庄市",class:"fucai"},
          {type:"体彩店",name:"好好学习彩票站",location:"河北省石家庄市",class:"ticai"},
          {type:"福彩店",name:"天天向上福票站",location:"河北省石家庄市",class:"fucai"}
        ]
      }
    },
    created (){
      this.$emit('viewIn',"投注站");
    },
  }
</script>
<style scoped>
  #stations {
    background-color: #eee;
  }
  ul.station-list {
    width: 100%;
  }
  li.station {
    position: relative;
    box-sizing: content-box;
    width: 100%;
    height: 1.34rem;
    border-top: 0.21rem solid #eee;
    background-color: #fff;
  }
  li.station::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0.21rem;
    transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    width: 0.18rem;
    height: 0.33rem;
    background-image: url(../assets/ico_into.png);
    background-size: 100% 100%;
  }
  li.station > a {
    display: block;
    width: 100%;
    height: 100%;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  span.station-type{
    position: absolute;
    top: 0;
    left: 0;
    width: 0.5rem;
    height: 1.34rem;
    font-size: 0.22rem;
    text-align: center;
    writing-mode: vertical-lr;
    line-height: 0.5rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  li.station > a > span.ticai {
    background-color: #e6f2fb;
    color: #4892d6;
  }
  li.station > a > span.fucai {
    background-color: #fcf0f0;
    color: #eb4e36;
  }
  div.station-info {
    position: absolute;
    top: 50%;
    left: 0.68rem;
    transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
  }
  p.station-name {
    color: #444;
    font-size: 0.28rem;
    margin-bottom: 0.24rem;
  }
  p.station-location {
    color: #888;
    font-size: 0.24rem;
  }
</style>
