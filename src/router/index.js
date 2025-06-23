import { createRouter, createWebHistory } from 'vue-router'
import Component from '@/views/Component.vue';
import Mustache from '@/views/Mustache.vue';
import Chapter3 from '@/views/Chapter3.vue';
import Chapter4 from '@/views/Chapter4.vue';
import Chapter5 from '@/views/Chapter5.vue';
import Chapter6 from '@/views/Chapter6.vue';


const router = createRouter({ //정보를 주는곳
  history: createWebHistory(import.meta.env.BASE_URL),// 뒤로가기버튼에 남길것인가 아닌가 
  routes: [
    {
      path: '/component',
      component: Component
    },
    {
      path: '/mustache',
      component: Mustache
    },
    {
      path: '/chapter3',
      component: Chapter3
    },
    {
      path: '/chapter4',
      component: Chapter4
    },
    {
      path: '/chapter5',
      component: Chapter5
    },
    {
      path: '/chapter6',
      component: ()=>import('@/views/Chapter6.vue')
    },
    {
      path: '/chapter7',
      component: ()=>import('@/views/Chapter7.vue')
    },
    {
      path: '/chapter8',
      component: ()=>import('@/views/Chapter8.vue')
    }

  ]
})

export default router