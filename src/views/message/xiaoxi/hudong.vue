<template>
  <div>
    <mt-navbar v-model="selected">
      <img src="../../../assets/xiaoxi-img/fanhui.png" alt class="hudong-1" @click="hh"/>

      <mt-tab-item id="1">回复和@</mt-tab-item>
      <mt-tab-item id="2">关注和赞</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- <mt-cell v-for="n in 10" :title="'content ' + n" /> -->
        哈哈
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!-- <mt-cell v-for="n in 4" :title="'content ' + n" /> -->
        呵呵
      </mt-tab-container-item>-->
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
    hh(){
      this.$router.push('../../message')
    }
  },
};
</script>

<style>
.hudong-1{
    width: 46px;
    padding-top:5px;
}
</style>