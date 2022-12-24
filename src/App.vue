<template>
  <div id="app">
    <NavBar></NavBar>
    <MainPage></MainPage>
    <DownBar></DownBar>
  </div>
</template>

<script>
import DownBar from './components/DownBar.vue'
import MainPage from './components/MainPage.vue'
import NavBar from './components/NavBar.vue';

export default {
  components: {
    DownBar,
    MainPage,
    NavBar
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
  margin: 0px;
  padding: 0px;
}

body {
  margin: 0;
  padding: 0;
}
</style>
