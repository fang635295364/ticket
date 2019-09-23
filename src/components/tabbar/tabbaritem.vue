<template>
  <div class="tabbaritem" @click="tiao">
    <div v-if="!num">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="activeimg"></slot>
    </div>
    <div :class="[num?'active':'']">
      <slot name="tit"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    path: {
      type: String,
      default: "/home"
    }
  },
  methods: {
    tiao() {
      this.$router.push(this.path);
    }
  },
  computed: {
    num() {
      return this.$route.path.indexOf(this.path) != -1;
    }
  }
};
</script>
<style>
.tabbaritem img {
  display: block;
  width: 25px;
  height: 25px;
  margin: 0 auto;
}
.tabbaritem {
  font-size: 12px;
  flex: 1;
  text-align: center;
}
.active {
  color:#ff2661;
}
</style>