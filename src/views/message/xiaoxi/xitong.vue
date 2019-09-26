<template>
  <div>
    <div class="xitong-3">
      <img src="../../../assets/xiaoxi-img/fanhui.png" alt @click="hh"/>
      <div class="xitong-4">系统消息</div>
    </div>
    <div class="xitong">
      <ul class="xitong-1">
        <li>新人大礼包</li>
        <li>09月4日17:59</li>
      </ul>
      <ul class="xitong-2">
        <li>欢迎加入票牛大家庭！您已领取票牛新人优惠券大礼包，http://pnlk.me/newUserC快点点击链接使用吧，优惠券不用可是会过期的哦~</li>
        <li>></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hh(){
      this.$router.push('../../message')
    }
  },
};
</script>

<style scope>
body {
  background: #eee;
}
/* 头 */
.xitong-3 {
  background: white;
  font-size: 16px;
  display: flex;
  border-bottom: 1px solid #ccc;
  height: 40px;
  line-height: 40px;
}
.xitong-3 img {
  width: 46px;
  height: 35px;
  margin-top:2px;
  padding-left:16px;
}
.xitong-4{
  margin:0 auto;
}
/* 头结束 */
.xitong {
  border: 1px solid #ccc;
  height: 100px;
  margin: 16px 16px 0 16px;
  background: white;
  border-radius: 4px;
}
.xitong-1 {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
}
.xitong-1 li:last-child {
  font-size: 12px;
  color: #ccc;
}
.xitong-2{
    display: flex;
    font-size:12px;
    padding:6px 16px;
}
.xitong-2 li:first-child {
  padding-right: 6px;
}
.xitong-2 li:last-child {
  color: #ccc;
}

</style>