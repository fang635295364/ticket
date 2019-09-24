<template>
  <div class="home-activity-scoll-item">
    <div>
      <slot name="img"></slot>
    </div>
    <slot name="name"></slot>
    <div>
      <slot name="price"></slot>起
    </div>
    <div>
      <slot name="like"></slot>
      <div>
        <img src="../../../assets/imgs/home/like.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home-activity-scoll-item {
  width: 102px;
  margin-right: 10px;
  color: #262626;
  font-size: 14px;
  position: relative;
}
.home-activity-scoll-item > div:first-child > img {
  width: 102px;
  height: 137px;
}
.home-activity-scoll-item > div:nth-child(2) {
  margin-top: 7px;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.home-activity-scoll-item > div:nth-child(3) {
  font-size: 12px;
  color: #999;
  margin-left: 2px;
}
.home-activity-scoll-item > div:nth-child(3) > span {
  font-size: 12px;
  color: #ff2661;
}
.home-activity-scoll-item > div:last-child {
  font-size: 14px;
  font-weight: 500;
  width: 40px;
  height: 32px;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
}
.home-activity-scoll-item > div:last-child img {
  display: block;
  margin: 0 auto;
}
</style>