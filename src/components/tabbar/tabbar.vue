<template>
    <div id="tabbar">
      <slot></slot>
    </div>
</template>
<script>

export default {
  
};
</script>
<style>
#tabbar{
  height: 50px;
  display: flex;
  position: fixed;
  bottom: 0;
  left:0;
  right:0;
  background: #fff;
  padding-top:5px; 
  border-top: 1px solid #ccc; 
  z-index: 999;
}
</style>
