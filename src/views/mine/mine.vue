<template>
  <div class="mine">
    <!-- 背景部分开始 -->
    <div class="Y-header">
      <div class="Y-person">
        <!-- 头像 -->
        <div class="Y-avatar"></div>
        <!-- 名字  -->
        <router-link class="Y-baseinfo" :to="'geren'" tag="div">
          <div class="Y-name">花与洗</div>
          <div class="Y-level">
            <div class="Y-xinshou">新手</div>
          </div>
          <!-- 个人主页  开始 -->
          <div class="Y-personlabel">
            <span class="Y-span1">个人主页</span>
            <div class="Y-arrright"></div>
            <!-- 个人主页  结束 -->
          </div>
        </router-link>
        <router-view></router-view>
        <!-- 想看    评论   关注   粉丝  开始 -->
        <div class="Y-counts">
          <div class="Y-item">
            <div class="Y-num1">0</div>
            <div class="Y-item-text">想看</div>
          </div>
          <div class="Y-item">
            <div class="Y-num1">0</div>
            <div class="Y-item-text">评论</div>
          </div>
          <div class="Y-item">
            <div class="Y-num1">0</div>
            <div class="Y-item-text">明星</div>
          </div>
          <div class="Y-item">
            <div class="Y-num1">0</div>
            <div class="Y-item-text">关注</div>
          </div>
          <div class="Y-item">
            <div class="Y-num1">0</div>
            <div class="Y-item-text">粉丝</div>
          </div>
        </div>
        <!-- 想看    评论   关注   粉丝  结束 -->
      </div>
    </div>
    <!-- 背景部分结束 -->
    <!-- 下半部分开始 -->
    <div class="Y-tableview">
      <!-- 我的订单开始 -->
      <div class="Y-tbvsection Y-ordersection Y-borderbottom">
        <router-link class="Y-tbvrow" to="/dingdan" tag="div">
          <div class="Y-rowtext" style="margin-left:19px;">我的订单</div>
          <div class="Y-rowhint">查看全部订单</div>
          <div class="Y-rowarrow"></div>
        </router-link>
      </div>
      <!-- 我的订单结束 -->
      <!-- 待付款  待发货   待收货开始 -->
      <div class="Y-tbvsection">
        <div class="Y-orders">
          <div class="Y-item1">
            <div class="Y-icon Y-icontopay">
              <div class="Y-badeg" style="display:none;">0</div>
            </div>
            <div class="Y-text1">待付款</div>
          </div>
          <div class="Y-item1">
            <div class="Y-icon Y-icontosend">
              <div class="Y-badeg" style="display:none;">0</div>
            </div>
            <div class="Y-text1">待发货</div>
          </div>
          <div class="Y-item1">
            <div class="Y-icon Y-icontoreceive">
              <div class="Y-badeg" style="display:none;">0</div>
            </div>
            <div class="Y-text1">待收货</div>
          </div>
        </div>
      </div>
      <!-- 待付款  待发货   待收货结束 -->
      <!-- 优惠券  礼品卡 -->
      <div class="Y-tbvsection">
        <div class="Y-discounts">
          <router-link class="Y-item" tag="div" :to="'youhui'">
            <div class="Y-num2">13</div>
            <div class="Y-text2">优惠券</div>
          </router-link>
          <router-link class="Y-item" tag="div" :to="'lipinka'">
            <div class="Y-num2">0</div>
            <div class="Y-text2">礼品卡</div>
          </router-link>
        </div>
      </div>
      <!-- 优惠券 礼品卡结束 -->
      <!-- 我的福利开始 -->
      <div class="Y-tbvsection Y-welfaresection">
        <div class="Y-tbvrow Y-welfaretitle Y-borderbottom">
          <div class="Y-rowtext">我的福利</div>
        </div>
        <div class="Y-tbvrow Y-welfarecontent">
          <div class="Y-welfareitem">
            <div class="Y-iconwrap Y-iconredpackage"></div>
            <div class="Y-info">
              <div class="Y-title">邀请好友</div>
              <div class="Y-desc">返回10元现金</div>
            </div>
          </div>
          <div class="Y-welfareitem">
            <div class="Y-iconwrap Y-iconclub"></div>
            <div class="Y-info">
              <div class="Y-title">圈圈俱乐部</div>
              <div class="Y-desc">达人专属奖励</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 我的福利结束 -->
      <!-- 地址管理  -->
      <div class="Y-tbvsection">
        <div class="Y-tbvrow Y-borderbottom">
          <div class="Y-rowtext">地址管理</div>
          <div class="Y-rowarrow"></div>
        </div>
        <!-- 帮助与客服 -->
        <div class="Y-tbvrow Y-borderbottom">
          <div class="Y-rowtext">帮助与客服</div>
          <div class="Y-rowarrow"></div>
        </div>
        <!-- 卖家招募 -->
        <div class="Y-tbvrow Y-borderbottom">
          <div class="Y-rowtext">卖家招募</div>
          <div class="Y-rowarrow"></div>
        </div>
      </div>
      <!-- 退出登录 -->
      <div class="Y-tbvsection Y-logout">退出登录</div>
    </div>
    <!-- 下半部分结束 -->
    <div style="height:50px;"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 背景部分开始 */
/* 背景图片 */
.Y-person {
  width: 100%;
  height: 172px;
  background-size: cover;
  overflow: hidden;
  position: relative;
  background: linear-gradient(270deg, #ff5aa5 0%, #ff2661 100%);
}
/* 头像 */
.Y-avatar {
  background-image: url("https://img.piaoniu.com/user/3899452/avatar/1569308633938.jpg/4c30469817c03b6570e08637236d022bfcd20c17.jpg?imageView2/2/w/112/h/112/format/jpg/q/100");
  width: 56px;
  height: 56px;
  position: absolute;
  left: 18px;
  top: 37px;
  border: none;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  border-radius: 50%;
}
/* 名字 */
.Y-name {
  color: #fff;
  font-size: 18px;
  margin-top: 44px;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 105px;
  white-space: nowrap;
  margin-left: 90px;
}
/* 新手  个人主页 */
.Y-level {
  position: relative;
  height: 20px;
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.16);
  padding: 1px 12px;
  box-sizing: border-box;
  border-radius: 10px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.16);
  margin-left: 90px;
  margin-top: -10px;
}
/* 新手 */
.Y-xinshou {
  color: #fff;
  font-size: 12px;
  position: relative;
}
/* 个人主页 */
.Y-personlabel {
  position: absolute;
  margin-top: -58px;
  height: 32px;
  line-height: 32px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  right: 0;
  margin-left: 100px;
  font-size: 12px;
  width: 79px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
}
.Y-span1 {
  margin-right: 8px;
}
.Y-arrright {
  position: relative;
  display: inline-block;
  top: auto;
  background: url(../../assets/imgs/sanjiao.png);
  background-size: 5px 10px;
  width: 5px;
  height: 10px;
  right: 0;
  margin-top: 0;
}
/* 个人主页结束 */
/* 想看  评论   关注   粉丝 开始*/
.Y-counts {
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 49px;
  align-items: center;
}
.Y-item {
  text-align: center;
  color: #fff;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 1.3;
}
.Y-num1 {
  font-size: 15px;
}
.Y-item-text {
  font-size: 12px;
}
/* 想看  评论   关注   粉丝 结束*/
/* 背景部分结束 */
/* 我的订单部分开始 */
.Y-tableview {
  background-color: #f6f7f9;
}
.Y-tbvsection.Y-ordersection {
  margin-bottom: 0;
}
.Y-tbvsection,
.Y-tbvrow {
  border-bottom: none;
}
.Y-tbvsection {
  background-color: #fff;
  margin-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
}
.Y-borderbottom {
  position: relative;
}
.Y-tbvrow {
  line-height: 45px;
  height: 45px;
  margin-left: 19px;
}
/* 我的订单 */
.Y-rowtext {
  font-size: 16px;
  color: #262626;
  font-weight: 500;
  position: absolute;
  left: 0;
  text-align: center;
  line-height: 44px;
}
/* 查看全部订单开始 */
.Y-rowhint {
  position: absolute;
  right: 34px;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
  color: #999;
}
.Y-rowarrow {
  width: 6px;
  height: 12px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAAXNSR0IArs4c6QAAAelJREFUOBGlkz8sA3EUx3tXmtygq0iF4bqxIhZJB4OzEZVIJPpPxGJBLN0M/iwWg1ybdqgYMBCDECmRECaLrYvFzKSC1uc1V9Fry5WXvHv3+733+X1/v/e7c7n+aolE4grvbJRXi8ViP9ANcG8jsKooyilwK36eTCZHncKqrusGsAmgAe8CLziBlXIRW13kfQWYdRSTBWcDgcB7OW+PX6AkTNMcIWRwTY7g9XrHgsHgs+TsVgFK0mrSoZyb4T0LDEej0Qc7qNonKLplrk8gvAuv2fEqRQpLlslkvPl8fg/lQSZeVFWdjEQi+1baVReUgmw225TL5TZ5nWbLReISO1qT3I+gFIjJFaG8+r3jjkCB7R2vao4U1TJN06Rpj1auwxGYTqd1GnUJpON3Ho9n4Netcq/dnO0EoI0GXbvdbiMUCj39qJhKpXoALizoDKVBgRjX7ypKA+SPUGshHvh8vnHDMF4FEqu5Vdo/VCgU5LI1fNvv90/ZP/gqEKUxVLYBmjnTFl/LLLHAuMIqzshdhcju4M34Ol/JTC1IVvgCUZqjKImamxiPxWLyf9a1EohSHGDDqppDabkuYSUUlNaB5lH5wKOcKf0bJPkmgYhv/DYT4XB4zwlUAnm8oDQCdOwUKtXxw7Y3BPy3+BNA/bpVQOxGjAAAAABJRU5ErkJggg==);
  background-size: 6px 12px;
  right: 15px;
  position: absolute;
  top: 50%;
  margin-top: -6px;
}
/* 我的订单结束 */
/* 下半部分开始 */
/* 待付款  待发货   待收货开始*/
.Y-tableview .Y-tbvsection {
  border-bottom: none;
  background-color: #fff;
  margin-bottom: 10px;
}
.Y-orders {
  display: flex;
  height: 68px;
}
.Y-orders .Y-item1 {
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.Y-orders .Y-item1 .Y-icon {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  margin-bottom: 8px;
  width: 22px;
  height: 22px;
  position: relative;
}
.Y-orders .Y-item1 .Y-text1 {
  font-size: 12px;
  color: #666;
}
.Y-orders .Y-icontopay {
  background-image: url(//static.piaoniu.com/m/static/img/order-topay.4cf62ce.png);
}

.Y-orders .Y-icontosend {
  background-image: url(//static.piaoniu.com/m/static/img/order-tosend.20248ed.png);
}
.Y-orders .Y-icontoreceive {
  background-image: url(//static.piaoniu.com/m/static/img/order-toreceive.d23cc4e.png);
}
/* 待付款  待发货   待收货结束*/
/* 优惠券 礼品卡 */
.Y-discounts {
  display: flex;
}
.Y-discounts .Y-item {
  flex: 1;
  height: 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.Y-num2 {
  font-size: 16px;
  margin-bottom: 8px;
  color: #ff2661;
}
.Y-discounts .Y-item .Y-text2 {
  font-size: 12px;
  font-weight: 400;
  color: #666;
}
/* 优惠券 礼品卡结束 */
/* 我的福利 开始*/
.Y-tableview .Y-tbvsection .Y-tbvrow.Y-welfarecontent {
  margin-left: 0;
  height: 79px;
  display: flex;
}
.Y-welfarecontent .Y-welfareitem {
  flex: 1;
  position: relative;
  margin-top: 18px;
  margin-left: 20px;
}
/* 邀请好友  圈圈俱乐部 */
.Y-welfarecontent .Y-welfareitem .Y-info .Y-title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 9px;
  color: #262626;
}
.Y-welfarecontent .Y-welfareitem .Y-info {
  margin-left: 58px;
  margin-top: -14px;
}
.Y-welfarecontent .Y-welfareitem .Y-info .Y-title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 9px;
  color: #262626;
  width: 109px;
  height: 16px;
}
.Y-welfarecontent .Y-welfareitem .Y-info .Y-desc {
  font-size: 11px;
  color: #999;
  width: 109px;
  height: 14px;
}
.Y-iconwrap {
  width: 48px;
  height: 48px;
  position: absolute;
  left: 0;
  top: -3px;
  background-size: 48px 48px;
}
.Y-iconredpackage {
  background-image: url(//static.piaoniu.com/m/static/img/icon-redpackage.e078ab8.png);
}
.Y-iconclub {
  background-image: url(//static.piaoniu.com/m/static/img/icon-club.959250b.png);
}
/* 我的福利结束 */
/* 退出登录 */
.Y-logout {
  height: 44px;
  line-height: 44px;
  color: #ff2661;
  text-align: center;
  font-size: 16px;
}
/* 退出登录结束 */
</style>