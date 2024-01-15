<script setup>
import { ref } from "vue"
import { UseResumeStore } from "@/stores/resume"
import { useRouter, useRoute } from "vue-router"

const router = useRouter()
const route = useRoute()

const resumeStore = UseResumeStore()

const formModel = ref(null)
const form = ref({
  username: "",
  gender: "",
  age: "",
  city: "",
  tel: "",
  email: "",
  desc: "",
  mode: "",
})

const options = [
  {
    value: "男",
    label: "男",
  },
  {
    value: "女",
    label: "女",
  },
]

const rules = {
  username: [{ required: true, message: "请输入正确姓名", trigger: "blur" }],
  gender: [{ required: true, message: "请选择性别", trigger: "change" }],
  tel: [
    { required: true, message: "请输入电话号码", trigger: "blur" },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: "请输入正确的手机号",
      trigger: "blur",
    },
  ],
  age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
  city: [{ required: true, message: "请输入城市", trigger: "blur" }],
  email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
  desc: [{ required: true, message: "请输入技能", trigger: "blur" }],
}
//编辑回显
const echoResume = resumeStore.resume[route.query.index]
if (echoResume) {
  form.value = echoResume
  resumeStore.deleteResume(route.query.inedx)
}

const addResume1 = async () => {
  await formModel.value.validate()
  form.value.mode = 1
  resumeStore.saveResume(form.value)
  form.value = {}
  router.replace({ path: "/myresume" })
}
const addResume2 = async () => {
  await formModel.value.validate()
  form.value.mode = 2
  resumeStore.saveResume(form.value)
  form.value = {}
  router.replace({ path: "/myresume" })
}

const back = () => {
  router.replace({ path: "/" })
}
</script>

<template>
  <div class="nav">
    <i @click="back">返回首页</i>
  </div>
  <div class="common-layout">
    <el-container>
      <el-aside width="50%" class="right">
        <div class="resume">
          <p class="resume-top">个人简历</p>
          <div class="resume-main">
            <div class="resume-main-main">
              <i>姓名：{{ form.username }}</i>
              <i>性别：{{ form.gender }}</i>
              <i>年龄：{{ form.age }}</i>
              <i>城市：{{ form.city }}</i>
              <i>电话：{{ form.tel }}</i>
              <i>邮箱：{{ form.email }}</i>
            </div>
            <div class="text">
              <i>技能：</i>
              <div class="words">{{ form.desc }}</div>
            </div>
          </div>
        </div>
      </el-aside>
      <el-main class="icoo">
        <el-form :model="form" :rules="rules" ref="formModel">
          <el-form-item label="姓名" prop="username">
            <el-input v-model="form.username" class="elput"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-select
              v-model="form.gender"
              class="m-2"
              placeholder="Select"
              size="large"
              style="width: 240px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item label="电话" prop="tel">
            <el-input
              v-model="form.tel"
              class="elput"
            ></el-input> </el-form-item
          ><el-form-item label="年龄" prop="age">
            <el-input
              v-model="form.age"
              class="elput"
            ></el-input> </el-form-item
          ><el-form-item label="城市" prop="city">
            <el-input
              v-model="form.city"
              class="elput"
            ></el-input> </el-form-item
          ><el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" class="elput"></el-input>
          </el-form-item>
          <el-form-item label="技能" prop="desc">
            <el-input class="elput" v-model="form.desc" type="textarea" />
          </el-form-item>
        </el-form>

        <el-button type="primary" @click="addResume1">选择蓝色模板</el-button>
        <el-button type="primary" @click="addResume2">选择绿色模板</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.nav {
  height: 40px;
  width: 100%;
  background-color: rgb(89, 189, 252);
  line-height: 40px;
  padding-left: 10px;
}
.common-layout {
  height: 500px;
  background-color: #fff;
  .el-container {
    border-top: 1px solid #24a9fc;
    background: linear-gradient(to bottom, #96e1f9, #fff);
  }
  .right {
    border-right: 1px solid #000;
  }
  .icoo {
    display: flex;
    justify-content: space-between;
  }

  .elput {
    width: 300px;
    height: 30px;
  }
  .resume-top {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #000;
    text-align: center;
    font-size: 30px;
    font-weight: normal;
    margin-bottom: 40px;
  }
  .resume-main {
    .resume-main-main {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      align-content: space-around;
      border-bottom: 1px solid #000;
      margin-bottom: 20px;
      i {
        width: 200px;
        height: 40px;
      }
    }
    .text {
      height: 300px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      border-bottom: 1px solid #000;
      padding-top: 40px;
      .words {
        width: 500px;
        height: 200px;
        margin-right: 60px;
        margin-top: 20px;
        // background-color: pink;
      }
    }
  }
}
</style>
