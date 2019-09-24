<template>
  <div class="home-activity">
    <div class="home-activity-top">
      <slot name="title"></slot>
      <div>
        全部
        <span class="el-icon-arrow-right"></span>
      </div>
    </div>
    <div class="home-activity-scoll">
    <slot></slot>
    <div class="more">
      <img src="../../../assets/imgs/home/more.png" alt="">
    </div>
    </div>
  </div>
</template>

<script>
import scrollitem from "./home-scroll-item";
export default {
  components: {
    scrollitem
  }
};
</script>

<style>
.home-activity-top:after {
  content: "";
  clear: both;
  display: block;
}
.home-activity {
  width: 100%;
  font-size: 14px;
  color: #262626;
  padding-top: 32px;
  padding-bottom: 8px;
}
.home-activity-top {
  padding: 0 16px 14px 16px;
}
.home-activity-top > div:first-child {
  font-size: 18px;
  color: #565656;
  font-weight: 700;
  float: left;
}
.home-activity-top > div:last-child {
  color: #999;
  height: 17px;
  line-height: 17px;
  float: right;
}
.home-activity-scoll {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}
.more img{
  width: 102px;
  height: 137px;
}
</style>