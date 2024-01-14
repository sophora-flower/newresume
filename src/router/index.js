import { createRouter, createWebHashHistory } from "vue-router"
import Home from "@/views/Home/index.vue"
import Layout from "@/views/Layout/index.vue"
import MyResume from "@/views/MyResume/index.vue"
import CreateResume from "@/views/CreateResume/index.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "myresume",
          component: MyResume,
        },
      ],
    },
    {
      path: "/createresume",
      component: CreateResume,
    },
  ],
})

export default router
