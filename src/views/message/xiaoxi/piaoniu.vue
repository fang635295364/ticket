<template>
  <div>
    <div class="piaoniu-3">
      <img src="../../../assets/xiaoxi-img/fanhui.png" alt @click="hh"/>
      <div class="piaoniu-4">活动通知</div>
    </div>
    <div class="piaoniu">
      <ul class="piaoniu-1">
        <li>活动通知</li>
        <li>13:12</li>
      </ul>
      <ul class="piaoniu-2">
        <li>0元抢平夏斯·祖克曼与阿德莱德交响乐团音乐会门票，赶紧点击参与>>></li>
        <li>></li>
      </ul>
    </div>
    <div class="piaoniu">
      <ul class="piaoniu-1">
        <li>活动通知</li>
        <li>13:12</li>
      </ul>
      <ul class="piaoniu-2">
        <li>0元抢平夏斯·祖克曼与阿德莱德交响乐团音乐会门票，赶紧点击参与>>></li>
        <li>></li>
      </ul>
    </div>
    <div class="piaoniu">
      <ul class="piaoniu-1">
        <li>活动通知</li>
        <li>13:12</li>
      </ul>
      <ul class="piaoniu-2">
        <li>0元抢平夏斯·祖克曼与阿德莱德交响乐团音乐会门票，赶紧点击参与>>></li>
        <li>></li>
      </ul>
    </div>
    <div class="piaoniu">
      <ul class="piaoniu-1">
        <li>活动通知</li>
        <li>13:12</li>
      </ul>
      <ul class="piaoniu-2">
        <li>0元抢平夏斯·祖克曼与阿德莱德交响乐团音乐会门票，赶紧点击参与>>></li>
        <li>></li>
      </ul>
    </div>
    <div class="piaoniu">
      <ul class="piaoniu-1">
        <li>活动通知</li>
        <li>13:12</li>
      </ul>
      <ul class="piaoniu-2">
        <li>0元抢平夏斯·祖克曼与阿德莱德交响乐团音乐会门票，赶紧点击参与>>></li>
        <li>></li>
      </ul>
    </div>
    <div class="piaoniu">
      <ul class="piaoniu-1">
        <li>活动通知</li>
        <li>13:12</li>
      </ul>
      <ul class="piaoniu-2">
        <li>0元抢平夏斯·祖克曼与阿德莱德交响乐团音乐会门票，赶紧点击参与>>></li>
        <li>></li>
      </ul>
    </div>
    <div class="piaoniu">
      <ul class="piaoniu-1">
        <li>活动通知</li>
        <li>13:12</li>
      </ul>
      <ul class="piaoniu-2">
        <li>0元抢平夏斯·祖克曼与阿德莱德交响乐团音乐会门票，赶紧点击参与>>></li>
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
/*  头*/
.piaoniu-3 {
  background: white;
  font-size: 16px;
  display: flex;
  border-bottom: 1px solid #ccc;
  height: 40px;
  line-height: 40px;
}
.piaoniu-3 img {
  width: 46px;
  height: 35px;
  margin-top:2px;
  padding-left:16px;
}
.piaoniu-4{
  margin:0 auto;
}
/* 头结束 */

.piaoniu {
  border: 1px solid #ccc;
  height: 90px;
  margin: 16px 16px 0 16px;
  background: white;
  border-radius: 4px;
}
.piaoniu-1 {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
}
.piaoniu-1 li:last-child {
  font-size: 12px;
  color: #ccc;
}
.piaoniu-2 {
  display: flex;
  font-size: 12px;
  height: 40px;
  padding: 8px 16px;
}
.piaoniu-2 li:first-child {
  padding-right: 6px;
}
.piaoniu-2 li:last-child {
  color: #ccc;
}

</style>