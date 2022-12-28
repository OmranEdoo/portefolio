<template>
  <div id="app">
    <NavBar id="navBar"></NavBar>
    <MainPage></MainPage>
    <CursusPage></CursusPage>
    <SkillsPage></SkillsPage>
    <DownBar></DownBar>
  </div>
</template>


<script>
import NavBar from './components/NavBar.vue'
import DownBar from './components/DownBar.vue'
import MainPage from './components/MainPage.vue'
import CursusPage from './components/CursusPage.vue'
import SkillsPage from './components/SkillsPage.vue'

export default {  
  components: {
    NavBar,
    DownBar,
    MainPage,
    CursusPage,
    SkillsPage
  },
  mounted () {
    console.log("on scroll "+window.innerWidth);
    window.scrollTo(window.innerWidth, 0);
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
  display: flex;
  align-content: stretch;
  flex-direction: column;
  flex-wrap: wrap;
}

html,
body {
    height:auto!important;
    min-height:100vh;
}

body {
  margin: 0;
  padding: 0;
  margin-left: 100vw;
  overflow-x: hidden;
}

#navBar {
  z-index: 10000;
}
</style>
