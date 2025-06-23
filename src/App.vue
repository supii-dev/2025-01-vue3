<script setup>

</script>

<template>  
<!-- name:''으로도 가능하나 path로 하는게 맞음 그래야 외부까지 사용가넝  -->
  <router-link to="/component">컴포넌트</router-link>
  <router-link to="/mustache">mustache template</router-link>
  <router-link to="/chapter3">chapter3</router-link>
  <router-link to="/chapter4">chapter4</router-link>
  <router-link to="/chapter5">반응형 상태</router-link>
  <router-link to="/chapter6">chapter6</router-link>
  <router-link to="/chapter7">데이터 바인딩</router-link>
  <router-link to="/chapter8">훅 Hook</router-link>
  <router-view /> 
   <!-- 중요 마운트처리  -->
</template>

<style scoped>

</style>

//ctrl + shift + n 시크릿모드로 열기
//터미널에서 컨트롤 +c 하면 첨부터~