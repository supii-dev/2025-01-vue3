<script setup>
import {ref, reactive,nextTick} from 'vue';
//원시 ref 객체는 reactive
const pushUp = ref(0);//ref메소드는 반응형 상태 객체 주소값을 리턴 , 초기값을 value속성에 저장
const state = reactive({
    sitUp: 0// 윗몸일으키기 개수
  })
//const 주소값은 변경할수 없지만 멤버필드안의 변수들은 변경가능

const increasePushUp = () => {
  pushUp.value++;
  nextTick(()=>{
    console.log(document.querySelector('#pushUp').innerText);//리엑트나 뷰로 하면됨 
  })

  console.log('푸쉬업 이벤트 발생!', pushUp.value);
};
const increasesitUp = () => {
  state.sitUp++;
  console.log('싯업 이벤트 발생!', state.sitUp);
};

</script>

<template>
  <h1>Chapter5.vue - 반응형 상태</h1>
  <hr>
  <div id="pushUp">팔 굽혀 펴기 : {{ pushUp }}</div>
  <div id="sitUp">윗몸 일으키기 : {{ state.sitUp }}</div>

  <hr>
  <button @click="increasePushUp">팔 굽혀 펴기 증가</button>
  <button @click="increasesitUp">윗몸 일으키기</button>
</template>

<style scoped></style>