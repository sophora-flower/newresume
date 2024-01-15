<script setup>
import { defineProps } from "vue"

const props = defineProps({
  item: Object,
  index: Number,
})
console.log(props)
const confirmEvent = (index) => {
  resumeStore.deleteResume(index)
}
</script>

<template>
  <div class="resume">
    <div class="green">
      <div class="images">
        <img src="@/assets/images/樱桃.png" alt="" />
      </div>
      <div class="nameword">{{ item.username }}</div>
    </div>
    <div class="center">
      <div class="mainbg">
        <div class="person">
          <div class="stybg">个人资料</div>
          <div class="imf">
            <i class="nameword">姓名：{{ item.username }}</i>
            <i class="gender">性别：{{ item.gender }}</i>
            <i class="age">年龄：{{ item.age }}</i>
            <i class="tel">电话：{{ item.tel }}</i>
            <i class="city">城市：{{ item.city }}</i>
            <i class="email">邮箱：{{ item.email }}</i>
          </div>
        </div>
        <div class="desc">
          <div class="desc1">技能</div>
          <div class="cont">技能:{{ item.desc }}</div>
        </div>
      </div>
    </div>
    <div class="bootom">
      <div class="words">谢谢阅读</div>
      <div class="action">
        <el-button plain>编辑</el-button>
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
  .green {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(7, 154, 152);
    .images {
      height: 130px;
      width: 130px;
      border: 2px solid #fff;
      border-radius: 65px;
    }
    .nameword {
      width: 150px;
      height: 70px;
      border-top: 2px solid #fff;
      text-align: center;
      line-height: 70px;
      font-size: 20px;
      color: #fff;
    }
  }
  .center {
    width: 100%;
    height: 370px;
    .mainbg {
      width: 100%;
      height: 360px;
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      .person {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 50%;
        height: 360px;
        border-right: 2px solid rgb(7, 154, 152);
        .stybg {
          width: 150px;
          height: 30px;
          border: 1px solid rgb(7, 154, 152);
          color: rgb(7, 154, 152);
          font-size: 16px;
          text-align: center;
          line-height: 30px;
        }
        .imf {
          width: 100%;
          height: 360px;
          padding: 5px;
          display: flex;
          flex-wrap: wrap;
          i {
            width: 200px;
            color: rgb(7, 154, 152);
            font-size: 16px;
          }
        }
      }
      .desc {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 190px;
        height: 360px;
        .desc1 {
          width: 150px;
          height: 30px;
          border: 1px solid rgb(7, 154, 152);
          color: rgb(7, 154, 152);
          font-size: 16px;
          text-align: center;
          line-height: 30px;
        }
        .cont {
          width: 190px;
          height: 330px;
          padding: 5px;
          color: rgb(7, 154, 152);
          font-size: 16px;
        }
      }
    }
  }
  .bootom {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    background-color: rgb(7, 154, 152);
    color: #fff;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    .words {
      width: 50%;
      height: 100%;
      background-color: rgb(7, 154, 152);
      color: #fff;
      text-align: right;
      line-height: 30px;
      font-size: 16px;
    }
    .action {
      width: 50%;
      margin-right: 5px;
      .el-button {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
