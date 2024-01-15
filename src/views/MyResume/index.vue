<script setup>
import LayoutFixed from "../Layout/components/LayoutFixed.vue"
import { UseResumeStore } from "@/stores/resume"
import { useRouter } from "vue-router"
const router = useRouter()
const resumeStore = UseResumeStore()

const go = () => router.push("/createresume")

const count = resumeStore.resume.length
</script>

<template>
  <LayoutFixed></LayoutFixed>
  <div class="header"></div>
  <div class="main">
    <div
      v-if="count > 0"
      class="resume"
      v-for="(item, index) in resumeStore.resume"
      :key="index"
    >
      <ResumeBlue
        v-if="item.mode === 1"
        :item="item"
        :index="index"
      ></ResumeBlue>
      <ResumeGreen v-else :item="item" :index="index"></ResumeGreen>
    </div>
    <div class="toast" v-else>
      <p>空空如也，快去生成简历吧</p>
      <el-button type="primary" @click="go">创建简历</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #fff;
  .toast {
    width: 500px;
    height: 400px;
    position: relative;
    p {
      height: 200px;
      text-align: center;
      line-height: 200px;
      font-size: 40px;
      font-family: serif;
      color: rgb(88, 171, 244);
    }
    .el-button {
      position: absolute;
      left: 50%;
      margin-left: -36px;
    }
  }
  .resume {
    width: 500px;
    height: 610px;
    border: 1px solid #030f96;
    margin-bottom: 30px;
    &:hover {
      transform: scale(1.05);
      transition: all 0.3s linear;
    }
    // background-color: pink;
    h1 {
      height: 60px;
      line-height: 30px;
      text-align: center;
      border-bottom: 1px solid rgb(17, 17, 18);
    }
    .person {
      display: flex;
      width: 100%;
      height: 200px;
      justify-content: space-between;
      border-bottom: 1px solid rgb(17, 17, 18);
      h3 {
        width: 100px;
        text-align: center;
        border-right: 1px solid rgb(17, 17, 18);
      }
      ul {
        width: 300px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        li {
          width: 150px;
        }
      }
    }
    .desc {
      display: flex;
      justify-content: space-between;
      height: 150px;
      width: 100%;
      border-bottom: 1px solid rgb(17, 17, 18);
      .left {
        width: 100px;
        height: 150px;
        text-align: center;
        line-height: 150px;
        border-right: 1px solid rgb(17, 17, 18);
      }
      .right {
        width: 400px;
      }
    }
    .action {
      display: flex;
      justify-content: space-between;
      height: 50px;
      align-items: center;
    }
  }
}
</style>
