<template>
  <div id="app">
    <NavBar></NavBar>
    <MainPage></MainPage>
    <DownBar></DownBar>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import DownBar from './components/DownBar.vue'
import MainPage from './components/MainPage.vue'

export default {
  components: {
    NavBar,
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
  margin-top: 60px;
}
</style>
