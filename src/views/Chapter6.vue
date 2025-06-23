<script setup>
import {computed, reactive} from 'vue';

//반응형 상태
const state = reactive({
    mvpId: 9,
    players:[
        { id: 7, name: 'john Doe'},
        { id: 9, name: 'john Lee'},
        { id: 12, name: 'james Park'},
    ]
});



const getMvpName = () => {
    if(state.mvpId){ // 0만 f
        const player = state.players.find(item => item.id === state.mvpId); //find 메소드 //===데이터,타입  
        if(player){
            return player.name;
        }
    }//옵셔널 체이닝 사용하지않으면 이렇게 작성해야함
    return '없음';
};//메소드를 만들고

const getMvpNameNice = () => {
    console.log('getMvpNameNice 메소드 !');
    return state.players.find(item => item.id === state.mvpId)?.name || '없음';
    };

//컴퓨티드
const computedMvpName = computed(()=>{
    console.log('computedMvpName 컴퓨티드 !');
    return state.players.find(item => item.id === state.mvpId)?.name || '없음';
});



</script>

<template>
    <h1>chapter6.vue</h1>
    <h1>오늘의 MVP</h1>
    <template v-if="state.mvpId">
        <!-- Optional Chaining -->
        {{ state.players.find(item => item.id === state.mvpId)?.name || '없음' }} 
    </template>
    <div>{{ getMvpName() }}</div>
    <div >nice: {{ getMvpNameNice() }}</div>
    <div >nice: {{ getMvpNameNice() }}</div>
    <div >computed: {{ computedMvpName }}</div>
    <div >computed: {{ computedMvpName }}</div>
    <!-- 메소드를 호출 -->
</template>

<style scoped>

</style>

<!-- map 비파괴 메소드, 기존 배열을 변형해서 새로운 배열을 만들때 사용 특징 원본과 길이가같다 알맹이는 다르다  -->
