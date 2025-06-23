<script setup>

import { onMounted , onUpdated , onUnmounted,reactive} from 'vue';//on은 이벤트

onMounted(()=>{
    //즉,화면에 그려질때 작업하고 싶은 내용이 있으면
    //onMounted 콜백 함수에 작성하면 된다.
        console.log('컴포넌트가 마운트 됐다.');//화면이 바뀔때마다 뜸, 통신처리
    });

    const state = reactive({
        message: 'Hello!'
    });
    onUnmounted(()=>{
        alert('나 가유~~~~~');
    });
    onUpdated(()=>{
     console.log('화면이 수정됨!',state.massage); //꺼져도 저장이 되있음 ,추천추천
    });
</script>

<template>
    <h1>chapter8.vue</h1>
    <div>{{ state.message }}</div>
    <div><input type="text" v-model="state.message"></div>
</template>

<style scoped>

</style>
<!-- 보일러플레이트 여러곳에서 재사용 반복적으로 사용-->