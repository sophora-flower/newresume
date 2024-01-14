import { defineStore } from "pinia"
import { ref } from "vue"

export const UseResumeStore = defineStore(
  "resume",
  () => {
    const resume = ref([])
    const saveResume = (data) => {
      resume.value.push(data)
      // 保存到本地存储或后端
    }
    const deleteResume = (index) => {
      resume.value.splice(index, 1)
      // 从本地存储或后端删除
    }
    return {
      resume,
      saveResume,
      deleteResume,
    }
  },
  {
    persist: true,
  }
)
