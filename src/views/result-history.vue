<template>
  <div id="result-history">
    <header>
      <i class="icon-back" v-on:click="backwards"></i>
      大乐透开奖列表
    </header>
  </div>
</template>
<script type="text/javascript">
  export default {
    methods: {
      backwards: function(){
        history.go(-1)
      }
    }
  }
</script>
