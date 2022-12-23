<template>
  <div id="app">
    <MainPage></MainPage>
    <DownBar></DownBar>
  </div>
</template>

<script>
import DownBar from './components/DownBar.vue'
import MainPage from './components/MainPage.vue'

export default {
  components: {
    DownBar,
    MainPage
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
