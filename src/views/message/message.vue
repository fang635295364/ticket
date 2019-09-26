<template>
  <div id="die">
    <div class="sck">消息中心</div>
    <ul class="sck-1">
      <li @click="tiao('/piaoniu')">
        <img src="../../assets/xiaoxi-img/xiaoxi-1.png" alt />
        <p>票牛活动</p>
      </li>
      <li @click="xitong('/xitong')">
        <img src="../../assets/xiaoxi-img/xiaoxi-2.png" alt />
        <p>系统消息</p>
      </li>
      <li @click="hudong('/hudong')">
        <img src="../../assets/xiaoxi-img/xiaoxi-3.png" alt />
        <p>互动消息</p>
      </li>
      <li @click="kefu('/kefu')">
        <img src="../../assets/xiaoxi-img/xiaoxi-4.png" alt />
        <p>在线客服</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import piaoniu from "./xiaoxi/piaoniu";
export default {
  methods: {
    tiao(res) {
      this.$router.push(res);
    },
    xitong(res) {
      this.$router.push(res);
    },
    hudong(res) {
      this.$router.push(res);
    },
    kefu(res) {
      this.$router.push(res);
    }
  }
};
</script>

<style scope>
body {
  background: #eee;
}
.sck {
  height: 36px;
  font-size: 16px;
  line-height: 36px;
  background: white;
}
.sck {
  text-align: center;
}
.sck-1 {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  height: 90px;
  border-radius: 10px;
  background: white;
  margin: 10px 10px;
  padding: 10px 20px;
}
.sck-1 li {
  text-align: center;
  font-size: 14px;
}
.sck-1 li img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
p {
  padding-top: 6px;
}
</style>