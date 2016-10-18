<template lang="html">
  <div id="daletou">
    <deadlines></deadlines>
    <div class="ball-zone">
      <p class="prompt">至少选择5个红球，2个蓝球<span class="random-btn">机选</span></p>
      <ul class="balls red-balls">
        <li v-for="num in 35">{{num}}</li>
      </ul>
      <ul class="balls">
        <li v-for="num in 12" class="blue-ball">{{num}}</li>
      </ul>
    </div>
    <btns></btns>
  </div>
</template>

<script>
import deadlines from '../components/deadlines-results.vue';
import btns from '../components/btns-default';
export default {
  data () {
    return {}
  },
  created (){
    this.$emit('viewIn',"大乐透");
  },
  computed: {},
  mounted () {},
  methods: {},
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
