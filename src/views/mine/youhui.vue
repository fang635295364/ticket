<template>
  <div class="youhui">
    <!-- 返回  优惠券  开始 -->
    <div class="Y-navbar">
      <div class="Y-btnleft" @click="Yback">返回</div>
      <div class="Y-title">优惠券</div>
      <div class="Y-btnright"></div>
    </div>
    <!-- 返回  优惠券  结束-->
    <div class="Y-main">
      <div class="Y-item-discount-container Y-selected">
        <div class="Y-item-discount-left">
          <div class="Y-item-discount-left-inner-wrap">
            <div class="Y-item-discount-left-inner">
              <div class="Y-item-discount-content-money Y-false">
                <span style="font-size:18px;">￥</span>
                38
              </div>
            </div>
          </div>
        </div>
        <div class="Y-item-discount-middle">
          <div class="Y-item-discount-title" style="margin-right: 85px;">演唱会立减38元</div>
          <div class="Y-item-discount-desc" style="margin-right: 85px;">APP专享，满2000元可用</div>
          <div class="Y-item-discount-effect-time">
            2019.9.24~12.23
            <span class="Y-item-discount-left-time"></span>
          </div>
          <div class="Y-item-discount-use Y-false">立即使用</div>
          <!-- <div class="Y-item-discount-check"></div> -->
        </div>
      </div>
      <div class="Y-item-discount-container">
        <div class="Y-item-discount-left">
          <div class="Y-item-discount-left-inner-wrap">
            <div class="Y-item-discount-left-inner">
              <div class="Y-item-discount-content-money Y-false">
                <span style="font-size:18px;">￥</span>
                30
              </div>
            </div>
          </div>
        </div>
        <div class="Y-item-discount-middle">
          <div class="Y-item-discount-title" style="margin-right: 85px;">话剧歌剧立减30元</div>
          <div class="Y-item-discount-desc" style="margin-right: 85px;">APP专享，满1000元可用</div>
          <div class="Y-item-discount-effect-time">
            2019.9.24~12.23
            <span class="Y-item-discount-left-time"></span>
          </div>
          <div class="Y-item-discount-use Y-false">立即使用</div>
          <!-- <div class="Y-item-discount-check"></div> -->
        </div>
      </div>
      <div class="Y-item-discount-container">
        <div class="Y-item-discount-left">
          <div class="Y-item-discount-left-inner-wrap">
            <div class="Y-item-discount-left-inner">
              <div class="Y-item-discount-content-money Y-false">
                <span style="font-size:18px;">￥</span>
                20
              </div>
            </div>
          </div>
        </div>
        <div class="Y-item-discount-middle">
          <div class="Y-item-discount-title" style="margin-right: 85px;">话剧歌剧立减20元</div>
          <div class="Y-item-discount-desc" style="margin-right: 85px;">APP专享，满800元可用</div>
          <div class="Y-item-discount-effect-time">
            2019.9.24~12.23
            <span class="Y-item-discount-left-time"></span>
          </div>
          <div class="Y-item-discount-use Y-false">立即使用</div>
          <!-- <div class="Y-item-discount-check"></div> -->
        </div>
      </div>
      <div class="Y-item-discount-container">
        <div class="Y-item-discount-left">
          <div class="Y-item-discount-left-inner-wrap">
            <div class="Y-item-discount-left-inner">
              <div class="Y-item-discount-content-money Y-false">
                <span style="font-size:18px;">￥</span>
                20
              </div>
            </div>
          </div>
        </div>
        <div class="Y-item-discount-middle">
          <div class="Y-item-discount-title" style="margin-right: 85px;">体育赛事立减20元</div>
          <div class="Y-item-discount-desc" style="margin-right: 85px;">APP专享，满500元可用</div>
          <div class="Y-item-discount-effect-time">
            2019.9.24~12.23
            <span class="Y-item-discount-left-time"></span>
          </div>
          <div class="Y-item-discount-use Y-false">立即使用</div>
          <!-- <div class="Y-item-discount-check"></div> -->
        </div>
      </div>
      <div class="Y-item-discount-container">
        <div class="Y-item-discount-left">
          <div class="Y-item-discount-left-inner-wrap">
            <div class="Y-item-discount-left-inner">
              <div class="Y-item-discount-content-money Y-false">
                <span style="font-size:18px;">￥</span>
                20
              </div>
            </div>
          </div>
        </div>
        <div class="Y-item-discount-middle">
          <div class="Y-item-discount-title" style="margin-right: 85px;">儿童亲子立减20元</div>
          <div class="Y-item-discount-desc" style="margin-right: 85px;">APP专享，满500元可用</div>
          <div class="Y-item-discount-effect-time">
            2019.9.24~12.23
            <span class="Y-item-discount-left-time"></span>
          </div>
          <div class="Y-item-discount-use Y-false">立即使用</div>
          <!-- <div class="Y-item-discount-check"></div> -->
        </div>
      </div>
      <div class="Y-item-discount-container">
        <div class="Y-item-discount-left">
          <div class="Y-item-discount-left-inner-wrap">
            <div class="Y-item-discount-left-inner">
              <div class="Y-item-discount-content-money Y-false">
                <span style="font-size:18px;">￥</span>
                10
              </div>
            </div>
          </div>
        </div>
        <div class="Y-item-discount-middle">
          <div class="Y-item-discount-title" style="margin-right: 85px;">全场立减10元</div>
          <div class="Y-item-discount-desc" style="margin-right: 85px;">APP专享，满400元可用</div>
          <div class="Y-item-discount-effect-time">
            2019.9.24~2020.3.22
            <span class="Y-item-discount-left-time"></span>
          </div>
          <div class="Y-item-discount-use Y-false">立即使用</div>
          <!-- <div class="Y-item-discount-check"></div> -->
        </div>
      </div>
      <div class="Y-item-discount-container">
        <div class="Y-item-discount-left">
          <div class="Y-item-discount-left-inner-wrap">
            <div class="Y-item-discount-left-inner">
              <div class="Y-item-discount-content-money Y-false">
                <span style="font-size:18px;">￥</span>
                10
              </div>
            </div>
          </div>
        </div>
        <div class="Y-item-discount-middle">
          <div class="Y-item-discount-title" style="margin-right: 85px;">全场立减10元</div>
          <div class="Y-item-discount-desc" style="margin-right: 85px;">APP专享，满400元可用</div>
          <div class="Y-item-discount-effect-time">
            2019.9.24~2020.3.22
            <span class="Y-item-discount-left-time"></span>
          </div>
          <div class="Y-item-discount-use Y-false">立即使用</div>
          <!-- <div class="Y-item-discount-check"></div> -->
        </div>
      </div>
      <div class="Y-item-discount-container">
        <div class="Y-item-discount-left">
          <div class="Y-item-discount-left-inner-wrap">
            <div class="Y-item-discount-left-inner">
              <div class="Y-item-discount-content-money Y-false">
                <span style="font-size:18px;">￥</span>
                5
              </div>
            </div>
          </div>
        </div>
        <div class="Y-item-discount-middle">
          <div class="Y-item-discount-title" style="margin-right: 85px;">休闲展览 立减5元</div>
          <div class="Y-item-discount-desc" style="margin-right: 85px;">APP专享，满200元可用</div>
          <div class="Y-item-discount-effect-time">
            2019.9.24~12.23
            <span class="Y-item-discount-left-time"></span>
          </div>
          <div class="Y-item-discount-use Y-false">立即使用</div>
          <!-- <div class="Y-item-discount-check"></div> -->
        </div>
      </div>
      <div class="Y-item-discount-container">
        <div class="Y-item-discount-left">
          <div class="Y-item-discount-left-inner-wrap">
            <div class="Y-item-discount-left-inner">
              <div class="Y-item-discount-content-money Y-false">
                <span style="font-size:18px;">￥</span>
                5
              </div>
            </div>
          </div>
        </div>
        <div class="Y-item-discount-middle">
          <div class="Y-item-discount-title" style="margin-right: 85px;">休闲展览 立减5元</div>
          <div class="Y-item-discount-desc" style="margin-right: 85px;">APP专享，满200元可用</div>
          <div class="Y-item-discount-effect-time">
            2019.9.24~12.23
            <span class="Y-item-discount-left-time"></span>
          </div>
          <div class="Y-item-discount-use Y-false">立即使用</div>
          <!-- <div class="Y-item-discount-check"></div> -->
        </div>
      </div>
      <div class="Y-item-discount-container">
        <div class="Y-item-discount-left">
          <div class="Y-item-discount-left-inner-wrap">
            <div class="Y-item-discount-left-inner">
              <div class="Y-item-discount-content-money Y-false">
                <span style="font-size:18px;">￥</span>
                5
              </div>
            </div>
          </div>
        </div>
        <div class="Y-item-discount-middle">
          <div class="Y-item-discount-title" style="margin-right: 85px;">全场立减5元</div>
          <div class="Y-item-discount-desc" style="margin-right: 85px;">APP专享，满200元可用</div>
          <div class="Y-item-discount-effect-time">
            2019.9.24~2020.3.22
            <span class="Y-item-discount-left-time"></span>
          </div>
          <div class="Y-item-discount-use Y-false">立即使用</div>
          <!-- <div class="Y-item-discount-check"></div> -->
        </div>
      </div>
      <div class="Y-item-discount-container">
        <div class="Y-item-discount-left">
          <div class="Y-item-discount-left-inner-wrap">
            <div class="Y-item-discount-left-inner">
              <div class="Y-item-discount-content-money Y-false">
                <span style="font-size:18px;">￥</span>
                5
              </div>
            </div>
          </div>
        </div>
        <div class="Y-item-discount-middle">
          <div class="Y-item-discount-title" style="margin-right: 85px;">全场立减5元</div>
          <div class="Y-item-discount-desc" style="margin-right: 85px;">APP专享，满200元可用</div>
          <div class="Y-item-discount-effect-time">
            2019.9.24~2020.3.22
            <span class="Y-item-discount-left-time"></span>
          </div>
          <div class="Y-item-discount-use Y-false">立即使用</div>
          <!-- <div class="Y-item-discount-check"></div> -->
        </div>
      </div>
      <div class="Y-item-discount-container">
        <div class="Y-item-discount-left">
          <div class="Y-item-discount-left-inner-wrap">
            <div class="Y-item-discount-left-inner">
              <div class="Y-item-discount-content-money Y-false">
                <span style="font-size:18px;">￥</span>
                5
              </div>
            </div>
          </div>
        </div>
        <div class="Y-item-discount-middle">
          <div class="Y-item-discount-title" style="margin-right: 85px;">全场立减5元</div>
          <div class="Y-item-discount-desc" style="margin-right: 85px;">APP专享，满200元可用</div>
          <div class="Y-item-discount-effect-time">
            2019.9.24~2020.3.22
            <span class="Y-item-discount-left-time"></span>
          </div>
          <div class="Y-item-discount-use Y-false">立即使用</div>
          <!-- <div class="Y-item-discount-check"></div> -->
        </div>
      </div>
      <div class="Y-item-discount-container">
        <div class="Y-item-discount-left">
          <div class="Y-item-discount-left-inner-wrap">
            <div class="Y-item-discount-left-inner">
              <div class="Y-item-discount-content-money Y-false">
                <span style="font-size:18px;">￥</span>
                5
              </div>
            </div>
          </div>
        </div>
        <div class="Y-item-discount-middle">
          <div class="Y-item-discount-title" style="margin-right: 85px;">全场立减5元</div>
          <div class="Y-item-discount-desc" style="margin-right: 85px;">APP专享，满200元可用</div>
          <div class="Y-item-discount-effect-time">
            2019.9.24~2020.3.22
            <span class="Y-item-discount-left-time"></span>
          </div>
          <div class="Y-item-discount-use Y-false">立即使用</div>
          <!-- <div class="Y-item-discount-check"></div> -->
        </div>
      </div>
    </div>
    <div style="height:40px;"></div>
    <div class="Y-coupon-exchange">
      <span class="Y-icon-plus"></span>
      <span class="Y-text">兑换优惠券</span>
    </div>
    <div style="height:50px;"></div>
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
.youhui{
  background-color: #f4f4f4;
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
  position: absolute;
  top: 0;
  right: 10px;
}
/* 返回 优惠券  结束 */
.Y-main {
  width: 100%;
  overflow: hidden;
  margin-top: 45px;
}
.Y-item-discount-container {
  overflow: hidden;
  position: relative;
  margin: 15px 14px;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  border-radius: 4px;
  background-image: url(//static.piaoniu.com/m/static/img/coupon-decorator.e63f996.png);
  background-size: 10px 4px;
  background-position: 4px 0;
  background-repeat: repeat-x;
}
.Y-item-discount-left {
  padding-top: 17px;
  padding-bottom: 17px;
  box-sizing: border-box;
  width: 93px;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  text-align: center;
  height: 120px;
}
.Y-item-discount-left-inner-wrap {
  width: 93px;
  height: 100%;
  border-right: 1px dashed #d8d8d8;
  overflow: hidden;
}
.Y-item-discount-left-inner {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.Y-item-discount-content-money {
  width: 100%;
  color: #ff2661;
  overflow: hidden;
  font-size: 36px;
  height: 40px;
}
.Y-item-discount-middle {
  margin-bottom: 22px;
  margin-left: 102px;
  overflow: hidden;
}
.Y-item-discount-title {
  color: #262626;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
  margin-top: 24px;
}
.Y-item-discount-title {
  color: #262626;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
  margin-top: 24px;
}
.Y-item-discount-effect-time {
  line-height: 1.4;
  color: #666;
  margin-right: 10px;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  margin-left: 10px;
}
.Y-item-discount-desc {
  line-height: 1.4;
  margin-bottom: 18px;
  color: #666;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  margin-left: 10px;
}
.Y-item-discount-check {
  width: 25px;
  height: 25px;
  background-image: url(//static.piaoniu.com/m/static/img/checkCoupon.03cd946.png);
  background-position: 0 0;
  position: absolute;
  right: 20px;
  margin-top: -12.5px;
  top: 50%;
  background-size: 25px 50px;
}
.Y-item-discount-use {
  position: absolute;
  top: 35px;
  right: 21px;
  color: #ff2661;
  font-size: 12px;
  border: 1px solid #ff2661;
  padding: 4px 6px;
  border-radius: 11px;
}
/* 兑换优惠券 */
.Y-coupon-exchange {
  display: none;
  position: fixed;
  left: 0;
  border-top: 1px solid #e6e6e6;
  bottom: 50px;
  z-index: 5;
  width: 100%;
  height: 44px;
  background: #fff;
  padding-left: 15px;
  color: #666;
  line-height: 44px;
  box-sizing: border-box;
  /* margin-top: 44px; */
  text-align: center;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.Y-coupon-exchange .Y-icon-plus {
  margin-left: -30px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 23px 23px;
  background-image: url(//static.piaoniu.com/m/static/img/icon-order-exchange.ae02325.png);
  margin-right: 10px;
  width: 23px;
  height: 23px;
}
</style>