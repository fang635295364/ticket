<template>
  <div>
    <div class="kefu-3">
      <img src="../../../assets/xiaoxi-img/fanhui.png" alt @click="hh" />
      <div class="kefu-4">活动通知</div>
    </div>
    <div class="kefu-1">
        <img src="../../../assets/xiaoxi-img/yuyin.png" alt="">
        <input type="text">
        <img src="../../../assets/xiaoxi-img/xiangji.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hh() {
      this.$router.push("../../message");
    }
  }
};
</script>

<style>
body{
    background: #eee;
}
/* 头 */
.kefu-3 {
  background: white;
  font-size: 16px;
  display: flex;
  border-bottom: 1px solid #ccc;
  height: 40px;
  line-height: 40px;
}
.kefu-3 img {
  width: 46px;
  height: 35px;
  margin-top: 2px;
  padding-left: 16px;
}
.kefu-4 {
  margin: 0 auto;
}
/* 头结束 */
.kefu-1{
    background: white;
    position: fixed;
    bottom:49px;
    left:0;
    right:0;
    display: flex;
    justify-content: space-around;
    border:1px solid #ccc;
    height: 40px;
    padding: 5px;
}
.kefu-1 img{
    width: 30px;
    height: 30px;
}
.kefu-1 input{
    margin-left:3px;
    width: 260px;
    background: #f5f5f5;
    height: 30px;
    border: none;
    border-radius: 10px;
}
</style>