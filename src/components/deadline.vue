<template lang="html">
  <div id="deadline-bar">
    <span class="date">20161024期</span>
    <span class="deadline">截止：2016-10-24 20:00:00</span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
  #deadline-bar {
    width: 100%;
    height: 0.6rem;
    padding: 0 0.21rem;
    border-bottom: 1px solid #ccc;
    background-color: white;
    font-size: 0.24rem;
    color: #666;
  }
  #deadline-bar > .date {
    float: left;
    height: 100%;
    line-height: 0.6rem;
  }
  #deadline-bar > .deadline {
    float: right;
    height: 100%;
    line-height: 0.6rem;
  }
</style>
