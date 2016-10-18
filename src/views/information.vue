<template>
  <div id="information">
    <!-- <header>
      <i class="icon-back" v-on:click="backwards"></i>
      购彩资讯
    </header> -->
    <ul class="info-list">
      <li class="information">
        <router-link to="information/information_detail" class="link">
          <img src="" alt="" />
          <ul class="info-preview">
            <li class="info-preview-titile">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</li>
            <li class="info-preview-content">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</li>
            <li class="info-preview-date">11-21 12：30</li>
          </ul>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    created (){
      this.$emit('viewIn',"购彩资讯");
    }
  }
</script>
<style>
  ul.info-list {
    width: 100%;
    padding:0 0.21rem;
  }
  li.information {
    position: relative;
    width: 100%;
    height: 1.56rem;
    padding-top: 0.23rem;
    border-bottom: 1px solid #eee;
  }
  .link{
    display: block;
    width: 100%;
    height: 100%;
  }
  li.information .link > img {
    float: left;
    width: 1.5rem;
    height: 1.1rem;
  }
  ul.info-preview {
    position: absolute;
    top: 0.23rem;
    left: 1.71rem;
    width: 5.04rem;

  }
  li.info-preview-titile{
    margin-bottom: 0.21rem;
    color: #444;
    font-size: 0.26rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 100%;
  }
  li.info-preview-content{
    color: #888;
    font-size: 0.22rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: 100%;
    text-align: justify;
  }
  li.info-preview-date{
    color: #888;
    font-size: 0.18rem;
    text-align: right;
    line-height: 100%;
  }
</style>
