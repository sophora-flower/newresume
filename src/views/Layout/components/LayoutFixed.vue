<script setup>
import { useScroll } from "@vueuse/core"
const { y } = useScroll(window)
</script>

<template>
  <div class="header" :class="{ show: y > 60 }">
    <div class="logo">
      <img src="@/assets/images/resumelogo.jpg" alt="" />
    </div>
    <div class="nav">
      <el-button plain><RouterLink to="/">首页</RouterLink></el-button>
      <el-button plain
        ><RouterLink to="/myresume">我的简历</RouterLink></el-button
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
// 头部
.header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 0 20px;
  background-color: #fff;

  transform: translateY(-100%);
  opacity: 0;
  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  // background-color: pink;
  .logo {
    width: 200px;
    height: 100%;
    img {
      width: 100%;
    }
  }
  .nav {
    position: static;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 100%;
    justify-content: space-between;
    width: 300px;
  }
}
</style>
