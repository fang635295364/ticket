<template>
  <div>
    <tabbar  v-show="$route.meta.navShow">
      <tabbaritem path="/home">
        <img src="../assets/imgs/icon/shouye.png" alt slot="img" />
        <img src="../assets/imgs/icon/shouye.png" alt slot="activeimg" />
        <div slot="tit">推荐</div>
      </tabbaritem>
      <tabbaritem path="/list">
        <img src="../assets/imgs/icon/line.png" alt slot="img" />
        <img src="../assets/imgs/icon/line.png" alt slot="activeimg" />
        <div slot="tit">演出</div>
      </tabbaritem>
      <tabbaritem path="/found">
        <img src="../assets/imgs/icon/faxian.png" alt slot="img" />
        <img src="../assets/imgs/icon/tianjia.png" alt slot="activeimg" />
        <div slot="tit">发现</div>
      </tabbaritem>
      <tabbaritem path="/message">
        <img src="../assets/imgs/icon/xinxi.png" alt slot="img" />
        <img src="../assets/imgs/icon/xinxi.png" alt slot="activeimg" />
        <div slot="tit">消息</div>
      </tabbaritem>
      <tabbaritem path="/mine">
        <img src="../assets/imgs/icon/yonghu.png" alt slot="img" />
        <img src="../assets/imgs/icon/yonghu.png" alt slot="activeimg" />
        <div slot="tit">我的</div>
      </tabbaritem>
    </tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from "../components/tabbar/tabbar";
import tabbaritem from "../components/tabbar/tabbaritem";
export default {
  components: {
    tabbar,
    tabbaritem
  }
};
</script>

<style>
</style>