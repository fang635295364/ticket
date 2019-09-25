<template>
  <div class="lipinka">
    <div class="Y-navbar">
      <div class="Y-btnleft" @click="Yback">
        <div class="Y-icon-left"></div>
      </div>
      <div class="Y-title">礼品卡</div>
      <a href class="Y-btnright">说明</a>
    </div>
    <div class="Y-list-container Y-giftcard-list">
      <div class="Y-scroll-container">
        <div class="Y-nocard">
          <img src="//static.piaoniu.com/m/static/img/giftcard.a29de1e.png" alt />
          <div class="Y-texte">暂无可用礼品卡</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Yback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
/* 返回 优惠券  开始 */
.Y-navbar {
  height: 44px;
  width: 100%;
  background-color: #fff;
  top: 0;
  box-sizing: border-box;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  position: fixed;
  left: 0;
  overflow: hidden;
  z-index: 9;
}
.Y-navbar .Y-btnleft {
  position: absolute;
  left: 14px;
  top: 0;
  font-size: 16px;
  line-height: 44px;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
}
.Y-icon-left {
  background-image: url("//static.piaoniu.com/m/static/img/back-grey.b0b2b3e.png");
  background-repeat: no-repeat;
  width: 11px;
  height: 19px;
  background-size: 100%;
}
.Y-navbar .Y-title {
  text-align: center;
  font-size: 16px;
  height: 44px;
  line-height: 44px;
  max-width: 200px;
  margin: 0 auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #525252;
  font-weight: 600;
}
.Y-navbar .Y-btnright {
  color: #5fb7fc;
  height: 44px;
  font-size: 16px;
  line-height: 44px;
  position: absolute;
  top: 0;
  right: 10px;
}
/* 返回 优惠券  结束 */
.Y-list-container {
  margin-bottom: 70px;
}
.Y-nocard {
  margin-top: 240px;
  text-align: center;
  color: #999;
  font-size: 16px;
}
.Y-texte {
  margin-top: 3px;
}
</style>