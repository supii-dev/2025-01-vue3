import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// 외부에서 사용하렴녀 export 를 사용하면됨
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment } 
  // count= 최초의 값 increment = 함수의 속성값
})
