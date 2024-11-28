<script setup>
import AppBoard from './layout/AppBoard.vue';
</script>

<template>
  
  <div id="app">
    <AppBoard><router-view/></AppBoard>    
  </div>
</template>

<style scoped>
#app {
  font-family: Arial, sans-serif;
}
</style>
