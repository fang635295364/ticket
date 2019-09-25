<template>
  <div>
    <div class="Y-navbar">
      <div class="Y-btnleft" @click="Yback">
        <div class="Y-icon-left"></div>
      </div>
      <div class="Y-title">我的订单</div>
    </div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">待付款</mt-tab-item>
      <mt-tab-item id="3">待发货</mt-tab-item>
      <mt-tab-item id="4">待收货</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" class="Y-div1">
        <div class="Y-list-container">
          <div
            class="Y-scroll-container"
            style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
          >
            <div class="Y-no-result">
              <img src="//static.piaoniu.com/m/static/img/empty-face.36b9396.png" alt />
              <div class="Y-text">暂无此类订单</div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="Y-div1">
        <div class="Y-list-container">
          <div
            class="Y-scroll-container"
            style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
          >
            <div class="Y-no-result">
              <img src="//static.piaoniu.com/m/static/img/empty-face.36b9396.png" alt />
              <div class="Y-text">暂无此类订单</div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3" class="Y-div1">
        <div class="Y-list-container">
          <div
            class="Y-scroll-container"
            style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
          >
            <div class="Y-no-result">
              <img src="//static.piaoniu.com/m/static/img/empty-face.36b9396.png" alt />
              <div class="Y-text">暂无此类订单</div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4" class="Y-div1">
        <div class="Y-list-container">
          <div
            class="Y-scroll-container"
            style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
          >
            <div class="Y-no-result">
              <img src="//static.piaoniu.com/m/static/img/empty-face.36b9396.png" alt />
              <div class="Y-text">暂无此类订单</div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1"
    };
  },
  methods: {
    Yback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.mint-navbar {
  border-top: 1px solid #e6e6e6;
  box-shadow: 0 1px 0 0 #f5f5f5;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 0.08rem solid #ff2661;
  color: #ff2661;
  margin-bottom: -0.08rem;
}
>>> .mint-tab-item-label {
  color: inherit;
  font-size: 14px;
  line-height: 1;
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
.mt-tab-container-item {
  width: 100%;
}
.Y-list-container {
  background-color: #f2f2f2;
  height: 500px;
  /* margin-top:-40px; */
}
/* 图片 */
.Y-no-result {
  margin-top: 40px;
  display: block;
  position: static;
  background-color: transparent;
  width: 100%;
  bottom: 0;
  margin: 0 auto;
  margin-top: 40px;
  padding-top: 0;
  padding-bottom: 40px;
  z-index: 9;
}
.Y-no-result img {
  margin: 0 auto;
  width: 37px;
  display: block;
}
.Y-no-result .Y-text {
  margin-top: 18px;
  color: #999;
  text-align: center;
  font-size: 14px;
}
.Y-div1 {
  background-color: #f2f2f2;
  margin-top: 3px;
}
</style>