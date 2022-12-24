<template>
  <div id="app">
    <NavBar></NavBar>
    <MainPage></MainPage>
    <CursusPage></CursusPage>
    <DownBar></DownBar>
  </div>
</template>


<script>
import NavBar from './components/NavBar.vue'
import DownBar from './components/DownBar.vue'
import MainPage from './components/MainPage.vue'
import CursusPage from './components/CursusPage.vue'


export default {
  components: {
    NavBar,
    DownBar,
    MainPage,
    CursusPage
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

NavBar {
  position: fixed;
}

</style>
