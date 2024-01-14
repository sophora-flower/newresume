<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const add = () => {
  router.push("/createresume")
}
</script>

<template>
  <!-- 头部 -->

  <!-- 主体 -->

  <div class="main">
    <div class="content">
      <div class="topbox">
        <h3>简单</h3>
        <p>在线浏览简历</p>
      </div>
      <div class="bottombox">
        <el-button type="primary" @click="add">创建简历</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// 主体
.main {
  background-image: url(@/assets/images/main11.jpg);
  height: 600px;
  width: 100%;
  .content {
    position: fixed;
    width: 200px;
    height: 200px;
    left: 50%;
    margin-left: -100px;
    top: 50%;
    .topbox {
      margin-bottom: 60px;
      h3 {
        width: 100%;
        font-size: 35px;
        color: rgb(18, 17, 17);
        margin-bottom: 20px;
        text-align: center;
      }
      p {
        color: rgb(224, 219, 219);
        text-align: center;
        tab-size: 26px;
      }
    }
    .bottombox {
      text-align: center;
    }
  }
}
</style>
