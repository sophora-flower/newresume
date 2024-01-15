<script setup>
import { defineProps } from "vue"
import { UseResumeStore } from "@/stores/resume"
import { useRouter } from "vue-router"
const resumeStore = UseResumeStore()

const router = useRouter()

const props = defineProps({
  item: Object,
  index: Number,
})

const confirmEvent = (index) => {
  resumeStore.deleteResume(index)
}

const edit = (index) => {
  router.push({ path: "/createresume", query: { index: index } })
}
console.log(props)
</script>

<template>
  <div class="resume">
    <div class="person">
      <div class="cloumn1">
        <div class="io">个人简历</div>
        <div class="one">姓名：{{ item.username }}</div>
        <div class="two">年龄：{{ item.age }}</div>
        <div class="three">性别：{{ item.gender }}</div>
      </div>
      <div class="cloumn2">
        <div class="empty"></div>
        <div class="one1">电话：{{ item.tel }}</div>
        <div class="two2">邮箱：{{ item.email }}</div>
        <div class="three3">城市：{{ item.city }}</div>
      </div>
      <div class="cloumn3">
        <img src="@/assets/images/鸭梨.png" alt="" />
      </div>
    </div>
    <div class="bg">技能</div>
    <div class="desc">
      <div class="desc1">{{ item.desc }}</div>
      <div class="btn">
        <el-button plain @click="edit(index)">编辑</el-button>
        <el-popconfirm
          confirm-button-text="Yes"
          cancel-button-text="No"
          :icon="InfoFilled"
          icon-color="#626AEF"
          title="确定删除吗"
          @confirm="confirmEvent(index)"
        >
          <template #reference>
            <el-button>删除</el-button>
          </template>
        </el-popconfirm>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.resume {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .person {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 350px;
    .cloumn1 {
      width: 150px;
      height: 100%;
      display: flex;
      align-content: space-around;
      flex-wrap: wrap;
      .io {
        width: 100%;
        height: 80px;
        color: #fff;
        background-color: rgb(133, 16, 249);
        text-align: center;
        line-height: 80px;
        font-size: 30px;
      }
      .one {
        width: 100%;
        height: 90px;
        font-size: 20px;
        color: rgb(133, 16, 249);
        line-height: 90px;
      }
      .two {
        width: 100%;
        height: 90px;
        font-size: 16px;

        line-height: 90px;
      }
      .three {
        width: 100%;
        height: 90px;
        font-size: 16px;

        line-height: 90px;
      }
    }
    .cloumn2 {
      width: 200px;
      height: 100%;
      .empty {
        width: 100%;
        height: 80px;
      }
      .one1 {
        width: 100%;
        height: 90px;
        font-size: 16px;

        line-height: 90px;
      }
      .two2 {
        width: 100%;
        height: 90px;
        font-size: 16px;

        line-height: 90px;
      }
      .three3 {
        width: 100%;
        height: 90px;
        font-size: 16px;

        line-height: 90px;
      }
    }
    .cloumn3 {
      width: 150px;
      height: 100%;
      text-align: center;
      line-height: 150px;
      .img {
        width: 120px;
        height: 300px;
      }
    }
  }
  .bg {
    width: 100px;
    height: 60px;
    background-color: rgb(133, 16, 249);
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
  }
  .desc {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 480px;
    height: 200px;
    border-top: 1px solid rgb(133, 16, 249);
    border-left: 1px solid rgb(133, 16, 249);
    border-bottom: 1px solid rgb(133, 16, 249);
    padding: 0 10px;
    font-size: 16px;
    color: rgb(16, 15, 15);
    font-size: 16px;
    .desc1 {
      height: 100%;
      width: 400px;
    }
    .btn {
      height: 100%;
      width: 80px;
      margin-top: 20px;
      .el-button {
        margin: 0 auto;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
