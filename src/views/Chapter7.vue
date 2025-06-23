<script setup>
import { reactive } from 'vue';
const state = reactive({
    player: 'kim'
});
const state2 = reactive({
    form: {
        id: 'ddd',
        pw: ''
    }
});
const login = ()=>{
    alert(state2.form.id + '님 환영합니다!');//잘안씀 
}
</script>

<template>
    <h1>Chapter7.vue</h1>
    <h1>{{ state.player }}</h1>
    <div>
        <!-- 단방향 데이터 바인딩(일방통행) -->
        <input type="text" :value="state.player">
        <!-- 양방향 데이터 바인딩 -->
        <input type="text" v-model="state.player">
    </div>
    <form @submit.prevent="login">
        {{ state2.form.id }}
        <!-- @이벤트 바인딩 -->
         <input type="text" v-model="state2.form.id" placeholder="뷰만 할꼬야"> 
        <!--  placeholder = 힌트 ,양방향 데이터 바인딩-->
         <input type="submit" value="로그인">

    </form>

</template>

<style scoped>

</style>